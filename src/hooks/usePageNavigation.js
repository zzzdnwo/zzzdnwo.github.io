import { useEffect, useRef, useState } from 'react';

export default function usePageNavigation({ aboutRef, stackRef, projectRef, expRef, contactRef }) {
  const [showGnb, setShowGnb] = useState(true);
  const [activeSection, setActiveSection] = useState('main');
  const [gnbTheme, setGnbTheme] = useState('dark');
  const lastScrollY = useRef(0);

  useEffect(() => {
    let animationFrame;

    const updateNavigation = () => {
      const currentScrollY = window.scrollY;
      setShowGnb(currentScrollY <= 0 || currentScrollY <= lastScrollY.current);
      lastScrollY.current = currentScrollY;

      const trigger = window.innerHeight * 0.35;
      const aboutTop = aboutRef.current?.getBoundingClientRect().top;
      const stackTop = stackRef.current?.getBoundingClientRect().top;
      const projectTop = projectRef.current?.getBoundingClientRect().top;
      const expTop = expRef.current?.getBoundingClientRect().top;
      const contactTop = contactRef.current?.getBoundingClientRect().top;

      if (aboutTop === undefined || aboutTop > trigger) {
        setActiveSection('main');
        setGnbTheme('dark');
      } else if (stackTop > trigger) {
        setActiveSection('about');
        setGnbTheme('light');
      } else if (projectTop > trigger) {
        setActiveSection('stack');
        setGnbTheme('dark');
      } else if (expTop > trigger) {
        setActiveSection('project');
        setGnbTheme('dark');
      } else if (contactTop > trigger) {
        setActiveSection('exp');
        setGnbTheme('dark');
      } else {
        setActiveSection('contact');
        setGnbTheme('dark');
      }
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = undefined;
        updateNavigation();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateNavigation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [aboutRef, stackRef, projectRef, expRef, contactRef]);

  return { activeSection, gnbTheme, showGnb };
}
