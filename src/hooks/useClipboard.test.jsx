import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import useClipboard from './useClipboard';

function ClipboardProbe() {
  const { copy, status } = useClipboard();
  return (
    <>
      <button type="button" onClick={() => copy('seosson@naver.com')}>복사</button>
      <output>{status}</output>
    </>
  );
}

test('클립보드 복사 성공 상태를 제공한다', async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  });

  render(<ClipboardProbe />);
  fireEvent.click(screen.getByRole('button', { name: '복사' }));

  await waitFor(() => expect(screen.getByText('success')).toBeInTheDocument());
  expect(writeText).toHaveBeenCalledWith('seosson@naver.com');
});
