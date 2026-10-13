import { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import useMediaQuery from '../hooks/useMediaQuery';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function HeroBackground({ visible }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const enableSpline = visible && !isMobile && !prefersReducedMotion;

  return (
    <>
      <div className="main_bg" aria-hidden="true" />
      <ErrorBoundary fallback={null}>
        {enableSpline && (
          <div className="spline_fixed" aria-hidden="true">
            <Suspense fallback={null}>
              <Spline scene={require('../assets/images/scene-clean.splinecode')} />
            </Suspense>
          </div>
        )}
      </ErrorBoundary>
    </>
  );
}
