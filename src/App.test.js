import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./pages/Home', () => () => <div>Portfolio home</div>);
jest.mock('./pages/Resume', () => () => <div>Resume page</div>);
jest.mock('./pages/Projects', () => () => <div>Projects page</div>);

test.each([
  ['/portfolio', 'Portfolio home'],
  ['/resume', 'Resume page'],
  ['/projects', 'Projects page'],
])('renders the correct page for %s', (path, expectedContent) => {
  render(
    <MemoryRouter
      initialEntries={[path]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(expectedContent)).toBeInTheDocument();
});
