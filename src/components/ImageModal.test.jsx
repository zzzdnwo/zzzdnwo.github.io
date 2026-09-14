import { fireEvent, render, screen } from '@testing-library/react';
import ImageModal from './ImageModal';

const images = [
  { src: 'first.png', thumbnail: 'first.png', label: '첫 번째 화면' },
  { src: 'second.png', thumbnail: 'second.png', label: '두 번째 화면' },
];

test('closes only the image viewer when Escape is pressed', () => {
  const setSelectedIndex = jest.fn();
  render(<ImageModal images={images} selectedIndex={0} setSelectedIndex={setSelectedIndex} />);

  expect(screen.getByRole('dialog', { name: '첫 번째 화면 확대 보기' })).toBeInTheDocument();
  fireEvent.keyDown(document, { key: 'Escape' });

  expect(setSelectedIndex).toHaveBeenCalledWith(null);
});

test('changes images with arrow controls', () => {
  const setSelectedIndex = jest.fn();
  render(<ImageModal images={images} selectedIndex={0} setSelectedIndex={setSelectedIndex} />);

  fireEvent.click(screen.getByRole('button', { name: '다음 작업 화면' }));

  const updateSelectedIndex = setSelectedIndex.mock.calls[0][0];
  expect(updateSelectedIndex(0)).toBe(1);
});
