import { useEffect, useRef } from 'react';

export default function useRevealOnScroll({ threshold = 0.1, rootMargin = '25% 0px 0px 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => element.classList.toggle('show', entry.isIntersecting),
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return ref;
}
