import { render, screen } from '@testing-library/react';
import ResumeProjectList from './ResumeProjectList';

test('이력서 프로젝트 목록은 전달받은 데이터로 제목, 성과, 역할을 렌더링한다', () => {
  render(
    <ResumeProjectList
      experiences={[{
        id: 1,
        title: '데이터 기반 프로젝트',
        period: '2026.01',
        resumeAchievement: '이력서용 성과',
        roles: [{ title: '1. 구조 개선', details: ['공통 데이터로 렌더링'] }],
      }]}
    />,
  );

  expect(screen.getByText('데이터 기반 프로젝트')).toBeInTheDocument();
  expect(screen.getByText('이력서용 성과')).toBeInTheDocument();
  expect(screen.getByText('구조 개선')).toBeInTheDocument();
  expect(screen.getByText('공통 데이터로 렌더링')).toBeInTheDocument();
});
