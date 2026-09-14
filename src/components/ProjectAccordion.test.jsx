import { fireEvent, render, screen } from '@testing-library/react';
import ProjectAccordion from './ProjectAccordion';

const sections = [
  {
    id: 'features',
    title: '주요 기능',
    items: [{ id: 'shared-id', title: '기능 항목', bullets: ['기능 설명'] }],
  },
  {
    id: 'troubleshooting',
    title: '트러블슈팅',
    items: [{ id: 'shared-id', title: '문제 해결 항목', bullets: ['문제 해결 설명'] }],
  },
];

test('keeps accordion items in different sections independent even when their item IDs match', () => {
  render(<ProjectAccordion sections={sections} />);

  const featureButton = screen.getByRole('button', { name: '기능 항목' });
  const troubleshootingButton = screen.getByRole('button', { name: '문제 해결 항목' });

  fireEvent.click(featureButton);

  expect(featureButton).toHaveAttribute('aria-expanded', 'false');
  expect(troubleshootingButton).toHaveAttribute('aria-expanded', 'true');
});
