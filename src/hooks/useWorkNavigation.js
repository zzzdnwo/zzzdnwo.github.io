import { useCallback, useEffect, useRef, useState } from 'react';

export default function useWorkNavigation({ workRef, stackRef, projectRef, expRef }) {
  const [activeNav, setActiveNav] = useState(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const updateActiveNavigation = () => {
      const workElement = workRef.current;
      const projectElement = projectRef.current;
      const experienceElement = expRef.current;

      if (!workElement || !projectElement || !experienceElement || !stackRef.current) return;

      const workRect = workElement.getBoundingClientRect();
      if (workRect.bottom <= 0 || workRect.top >= window.innerHeight) {
        setActiveNav(null);
        return;
      }

      const triggerLine = window.innerHeight * 0.4;
      if (experienceElement.getBoundingClientRect().top <= triggerLine) {
        setActiveNav('exp');
      } else if (projectElement.getBoundingClientRect().top <= triggerLine) {
        setActiveNav('project');
      } else {
        setActiveNav('stack');
      }
    };

    const handleScroll = () => {
      if (animationFrameRef.current) return;
      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;
        updateActiveNavigation();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveNavigation();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, [workRef, stackRef, projectRef, expRef]);

  const scrollTo = useCallback((section) => {
    const sectionRefs = { stack: stackRef, project: projectRef, exp: expRef };
    const target = sectionRefs[section]?.current;
    if (!target) return;

    if (section === 'exp') {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset + 1, behavior: 'smooth' });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth' });
  }, [stackRef, projectRef, expRef]);

  return { activeNav, scrollTo };
}
