import { render, screen, waitFor } from '@testing-library/react';
import Spline from '@splinetool/react-spline';
import HeroBackground from './HeroBackground';
import useMediaQuery from '../hooks/useMediaQuery';

jest.mock('../hooks/useMediaQuery');
// Spline exposes ESM exports that CRA's Jest resolver cannot resolve directly.
jest.mock('@splinetool/react-spline', () => ({
  __esModule: true,
  default: jest.fn(() => <canvas data-testid="spline-scene" />),
}), { virtual: true });

beforeEach(() => {
  useMediaQuery.mockReturnValue(false);
  Spline.mockImplementation(() => <canvas data-testid="spline-scene" />);
});

test('loads the desktop scene over a persistent static background', async () => {
  const { container, rerender } = render(<HeroBackground visible />);
  expect(container.querySelector('.main_bg')).toBeInTheDocument();
  expect(await screen.findByTestId('spline-scene')).toBeInTheDocument();

  rerender(<HeroBackground visible={false} />);
  expect(screen.queryByTestId('spline-scene')).not.toBeInTheDocument();
  expect(container.querySelector('.main_bg')).toBeInTheDocument();
});

test.each(['(max-width: 768px)', '(prefers-reduced-motion: reduce)'])(
  'uses only the static background when %s matches', (preference) => {
    useMediaQuery.mockImplementation((query) => query === preference);
    const { container } = render(<HeroBackground visible />);

    expect(container.querySelector('.main_bg')).toBeInTheDocument();
    expect(Spline).not.toHaveBeenCalled();
  }
);

test('keeps the background and page content when the scene fails', async () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  Spline.mockImplementation(() => { throw new Error('Scene could not load'); });

  try {
    const { container, rerender } = render(
      <><HeroBackground visible /><h1>신우재 포트폴리오</h1></>
    );
    await waitFor(() => expect(consoleError).toHaveBeenCalled());
    expect(screen.getByRole('heading', { name: '신우재 포트폴리오' })).toBeInTheDocument();
    expect(container.querySelector('.main_bg')).toBeInTheDocument();
    expect(screen.queryByText(/문제가 발생했습니다/)).not.toBeInTheDocument();
    expect(screen.queryByTestId('spline-scene')).not.toBeInTheDocument();
    const failedRenderCount = Spline.mock.calls.length;
    rerender(<><HeroBackground visible={false} /><h1>신우재 포트폴리오</h1></>);
    rerender(<><HeroBackground visible /><h1>신우재 포트폴리오</h1></>);
    expect(Spline).toHaveBeenCalledTimes(failedRenderCount);
  } finally {
    consoleError.mockRestore();
    Spline.mockImplementation(() => <canvas data-testid="spline-scene" />);
  }
});
