import React, { useEffect, useMemo, Suspense, useRef, useState } from 'react';
import '../assets/scss/main.scss';
import '../assets/scss/detail.scss';
import ContactSection from '../components/ContactSection';
import ErrorBoundary from '../components/ErrorBoundary';
import ExperienceCarousel from '../components/ExperienceCarousel';
import HeaderNavigation from '../components/HeaderNavigation';
import Modal from '../components/Modal';
import ProjectCarousel from '../components/ProjectCarousel';
import Button from '../components/Button';
import stacks from '../data/stacks';
import projects from '../data/projects';
import qnaList from '../data/qna';
import experiences from '../data/experiences';
import useClipboard from '../hooks/useClipboard';
import useHorizontalSlider from '../hooks/useHorizontalSlider';
import useMediaQuery from '../hooks/useMediaQuery';
import usePageNavigation from '../hooks/usePageNavigation';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import useWorkNavigation from '../hooks/useWorkNavigation';

const Spline = React.lazy(() => import('@splinetool/react-spline'));
const email = 'seosson@naver.com';

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [heroStart, setHeroStart] = useState(false);
  const [showSpline, setShowSpline] = useState(true);
  const { copy, status: copyStatus } = useClipboard();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const workRef = useRef(null);
  const projectRef = useRef(null);
  const stackRef = useRef(null);
  const expRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const qnaAniRef = useRevealOnScroll({ threshold: 0.12 });
  const stackAniRef = useRevealOnScroll({ threshold: 0.06 });
  const projectAniRef = useRevealOnScroll({ threshold: 0.06 });
  const expAniRef = useRevealOnScroll({ threshold: 0.06 });
  const { activeSection, gnbTheme, showGnb } = usePageNavigation({
    aboutRef, stackRef, projectRef, expRef, contactRef,
  });
  const { activeNav, scrollTo } = useWorkNavigation({ workRef, stackRef, projectRef, expRef });
  const projectSlider = useHorizontalSlider({ enabled: isMobile, itemCount: projects.length });
  const expSlider = useHorizontalSlider({ enabled: isMobile, itemCount: experiences.length });

  const ActiveComponent = useMemo(() => {
    if (!activeProject) return null;
    return React.lazy(() => import(`../projects/${activeProject.file}.jsx`));
  }, [activeProject]);

  useEffect(() => {
    const updateSplineVisibility = () => setShowSpline(window.scrollY < 800);
    window.addEventListener('scroll', updateSplineVisibility, { passive: true });
    updateSplineVisibility();
    return () => window.removeEventListener('scroll', updateSplineVisibility);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroStart(true), 400);
    return () => window.clearTimeout(timer);
  }, []);

  function scrollToSection(section) {
    if (section === 'main') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (section === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const sectionRefs = {
      about: aboutRef,
      stack: stackRef,
      project: projectRef,
      exp: expRef,
    };
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function preload(file) {
    import(`../projects/${file}.jsx`).catch(() => {});
  }

  return (
    <div className="mainCont">
      <HeaderNavigation
        activeSection={activeSection}
        gnbTheme={gnbTheme}
        showGnb={showGnb}
        onNavigate={scrollToSection}
      />
      <main className={heroStart ? 'hero_start' : ''}>
        <div className="pos">
          {showSpline && (
            <div className="spline_fixed">
              <Suspense fallback={null}>
                <Spline scene={require('../assets/images/scene-clean.splinecode')} />
              </Suspense>
            </div>
          )}
          <div className="main_bg" />
          <div className="intro_mask" />
          <div className="myname_wrap"><h2 className="myname">SHIN WOO JAE</h2></div>
        </div>
      </main>
      <section className="about" ref={aboutRef}>
        <div className="about_left">
          <h3>About me</h3>
          <div className="about_profile" />
          <p className="about_period">2020.12 - 2025.10 <span /> 4년 11개월</p>
          <span className="about_companyNm">뉴젠솔루션</span>
          <ul className="about_workList">
            <li>뉴젠보드</li>
            <li>제트리포트</li>
            <li>비욘드 재무보고서</li>
            <li>비즈북스</li>
            <li>홈페이지 및 마이크로사이트</li>            
          </ul>
        </div>
        <div className="about_right">
          <div className="qna_ani" ref={qnaAniRef}>
            <h3>Interview</h3>
            <div className="qnaList">
              {qnaList.map((qna) => (
                <div key={qna.id} className="qna">
                  <span className="qna_question">{qna.question}</span>
                  <p className="qna_answer">{qna.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="work" ref={workRef}>
        <nav className="work_nav" aria-label="작업 기록 탐색">
          <Button id="stack" className={activeNav === 'stack' ? 'on' : ''} onClick={() => scrollTo('stack')}>Tech Stack</Button>
          <Button id="project" className={activeNav === 'project' ? 'on' : ''} onClick={() => scrollTo('project')}>Project</Button>
          <Button id="exp" className={activeNav === 'exp' ? 'on' : ''} onClick={() => scrollTo('exp')}>Experience</Button>
        </nav>
        <div className="work_right">
          <div className="stack_cont" ref={stackRef}>
            <div className="stack_ani" ref={stackAniRef}>
              <ul className="stack_list">
                {stacks.map((stack) => (
                  <li key={stack.id} className={`stack_item ${stack.id}`}>
                    <div className="stack_title">{stack.title}</div>
                    <div className="stack_skill">
                      {stack.item?.map((item) => <span key={item} className="skill">{item}</span>)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="project_cont" ref={projectRef}>
            <div className="project_ani" ref={projectAniRef}>
              <ProjectCarousel
                isMobile={isMobile}
                projects={projects}
                slider={projectSlider}
                onOpen={setActiveProject}
                onPreload={preload}
              />
            </div>
          </div>
          <div className="exp_cont" ref={expRef}>
            <div className="exp_ani" ref={expAniRef}>
              <ExperienceCarousel experiences={experiences} isMobile={isMobile} slider={expSlider} />
            </div>
          </div>
        </div>
      </section>
      <ContactSection contactRef={contactRef} copyStatus={copyStatus} onCopy={() => copy(email)} />
      <div className="floating">
        <div className="resume">
          <Button id="goResume" to="/resume" target="_blank" aria-label="이력서 열기">
            <img width="20" height="20" src={require('../assets/images/icon_resume.png')} alt="" />
          </Button>
        </div>
        <div className="copyMail">
          <Button id="copyMail" onClick={() => copy(email)} aria-label="메일 주소 복사">
            <img width="20" height="20" src={require('../assets/images/icon_mail.png')} alt="" />
          </Button>
        </div>
        <div className="goTop">
          <Button id="goTop" onClick={() => scrollToSection('main')} aria-label="맨 위로 이동">
            <img width="20" height="20" src={require('../assets/images/icon_goTop.png')} alt="" />
          </Button>
        </div>
      </div>
      <Modal isOpen={!!activeProject} onClose={() => setActiveProject(null)} project={activeProject}>
        <ErrorBoundary>
          <Suspense fallback={<div className="modal-loading" />}>
            {ActiveComponent ? <ActiveComponent /> : null}
          </Suspense>
        </ErrorBoundary>
      </Modal>
    </div>
  );
}
