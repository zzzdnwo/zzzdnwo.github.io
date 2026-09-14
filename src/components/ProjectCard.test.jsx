import { fireEvent, render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

const project = {
  id: 'sample',
  file: 'nzBoard',
  title: '샘플 프로젝트',
  label: '프로젝트 설명',
  period: '2026.01',
  tag: ['React'],
};

test('프로젝트 카드의 어느 영역을 눌러도 상세 열기 동작은 한 번만 실행된다', () => {
  const onOpen = jest.fn();
  const onPreload = jest.fn();

  render(
    <ul>
      <ProjectCard project={project} onOpen={onOpen} onPreload={onPreload} />
    </ul>,
  );

  fireEvent.click(screen.getByRole('button', { name: '샘플 프로젝트 자세히 보기' }));

  expect(onOpen).toHaveBeenCalledTimes(1);
  expect(onOpen).toHaveBeenCalledWith(project);
});
