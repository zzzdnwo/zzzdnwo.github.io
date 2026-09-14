import { useCallback, useEffect, useRef, useState } from 'react';

export default function useHorizontalSlider({ enabled, itemCount }) {
  const sliderRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lockTimerRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const [index, setIndex] = useState(0);

  const scrollToIndex = useCallback((nextIndex) => {
    if (!enabled) return;

    const slider = sliderRef.current;
    const item = slider?.children[nextIndex];
    if (!item) return;

    isProgrammaticScrollRef.current = true;
    setIndex(nextIndex);
    slider.scrollTo({ left: item.offsetLeft, behavior: 'smooth' });

    window.clearTimeout(lockTimerRef.current);
    lockTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 400);
  }, [enabled]);

  const goToPrevious = useCallback(() => {
    scrollToIndex(Math.max(index - 1, 0));
  }, [index, scrollToIndex]);

  const goToNext = useCallback(() => {
    scrollToIndex(Math.min(index + 1, itemCount - 1));
  }, [index, itemCount, scrollToIndex]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;

    const updateIndex = () => {
      if (isProgrammaticScrollRef.current) return;

      const children = Array.from(slider.children);
      const closestIndex = children.reduce((closest, child, childIndex) => (
        Math.abs(slider.scrollLeft - child.offsetLeft) < Math.abs(slider.scrollLeft - children[closest].offsetLeft)
          ? childIndex
          : closest
      ), 0);

      setIndex(closestIndex);
    };

    const handleScroll = () => {
      if (animationFrameRef.current) return;
      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;
        updateIndex();
      });
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      slider.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) window.cancelAnimationFrame(animationFrameRef.current);
      window.clearTimeout(lockTimerRef.current);
    };
  }, []);

  return { goToNext, goToPrevious, index, scrollToIndex, sliderRef };
}
