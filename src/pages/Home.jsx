import React, { useState, useMemo, Suspense, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import '../assets/scss/main.scss';
import '../assets/scss/detail.scss';
import Modal from '../components/Modal';
import ErrorBoundary from '../components/ErrorBoundary';
import projects from '../data/projects';
import qnaList from '../data/qna';
import experiences from '../data/experiences';
import Button from '../components/Button';




export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeNav, setActiveNav] = useState(null);
  const [heroStart, setHeroStart] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [projectIndex, setProjectIndex] = useState(0);
  const [expIndex, setExpIndex] = useState(0);
  // gnb 보여주는 상태 여부
  const [showGnb, setShowGnb] = useState(true);
  // gnb 버튼 상태 관련
  const [activeSection, setActiveSection] = useState('main');
  //gnb 뒷배경 관련 상태
  const [gnbTheme, setGnbTheme] = useState('dark'); 

  const workRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  
  const isScrollingRef = useRef(false);
  const projectSliderRef = useRef(null);
  const expSliderRef = useRef(null);
  

  //애니메이션용
  const qnaAniRef = useRef(null);
  const projectAniRef = useRef(null);
  const expAniRef = useRef(null);

  //Home 하단
  const lastScrollY = useRef(0);

  // activeFile이 바뀔 때마다 lazy 컴포넌트를 만들어 반환
  const ActiveComponent = useMemo(() => {
    if (!activeProject) return null;
    return React.lazy(() => import(`../projects/${activeProject.file}.jsx`));
  }, [activeProject]);




  //useEffect 영역

  //gnb 스크롤 이벤트
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0) {
          setShowGnb(true);
        } else {
          if (currentScrollY > lastScrollY.current) {
            setShowGnb(false);
          } else {
            setShowGnb(true);
          }
        }

        lastScrollY.current = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //gnb 클릭 시 섹션 스크롤 이동
  function scrollToSection(section) {
    if (section === 'main') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (section === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (section === 'project') {
      projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (section === 'exp') {
      expRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (section === 'contact') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  useEffect(() => {
  const handleScroll = () => {
    const winH = window.innerHeight;

    // 기준선 (뷰포트 기준 35%)
    const trigger = winH * 0.35;

    // 각 섹션 rect
    const aboutRect = aboutRef.current?.getBoundingClientRect();
    const projectRect = projectRef.current?.getBoundingClientRect();
    const expRect = expRef.current?.getBoundingClientRect();
    const contactRect = contactRef.current?.getBoundingClientRect();

    // 👉 main (fixed 영역 보정)
    if (!aboutRect || aboutRect.top > trigger) {
      setActiveSection('main');
      setGnbTheme('dark');
      return;
    }

    // about
    if (aboutRect.top <= trigger && projectRect.top > trigger) {
      setActiveSection('about');
      setGnbTheme('light');
      return;
    }

    // project
    if (projectRect.top <= trigger && expRect.top > trigger) {
      setActiveSection('project');
      setGnbTheme('dark');
      return;
    }

    // exp
    if (expRect.top <= trigger && contactRect.top > trigger) {
      setActiveSection('exp');
      setGnbTheme('dark');
      return;
    }

    // contact
    if (contactRect.top <= trigger) {
      setActiveSection('contact');
      setGnbTheme('dark');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  //메인 3D 인터랙션 canvas 휠 스크롤 이벤트
  useEffect(() => {
    const canvas = document.querySelector('.spline_fixed canvas');

    if (!canvas) return;

    const handleWheel = (e) => {
      window.scrollBy({
        top: e.deltaY,
      });
    };


    return () => {
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const [showSpline, setShowSpline] = useState(true);

  // 메인 3D 인터랙션 화면에 안보일 때 끄기
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShowSpline(scrollY < 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //모바일 체크용

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 홈 화면 인터랙션 타이머
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroStart(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);


  // work 섹션 네비게이션 인터랙션
  useEffect(() => {
    const workEl = workRef.current;
    const projectEl = projectRef.current;
    const expEl = expRef.current;
    if (!workEl || !projectEl || !expEl) return;

    const observer = new IntersectionObserver(
      () => {
        const workRect = workEl.getBoundingClientRect();

        // work 영역 밖
        if (workRect.bottom <= 0 || workRect.top >= window.innerHeight) {
          setActiveNav(null);
          return;
        }

        const projectRect = projectEl.getBoundingClientRect();
        const expRect = expEl.getBoundingClientRect();

        // project_cont가 보이는 정도
        const projectVisible =
          projectRect.bottom > 0 &&
          projectRect.top < window.innerHeight;

        if (projectVisible) {
          setActiveNav('project');
          return;
        }

        // project_cont가 안보이면 exp 버튼 activeNav
        const expTriggerLine = window.innerHeight * 0.4;
        if (expRect.top <= expTriggerLine) {
          setActiveNav('exp');
          return;
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(workEl);
    observer.observe(projectEl);
    observer.observe(expEl);

    return () => observer.disconnect();
  }, []);

  // Qna 스크롤 이벤트 
  useEffect(() => {
    const el = qnaAniRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      },
      {
        threshold: 0.12,
        rootMargin: '25% 0px 0px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // project 스크롤 이벤트
  useEffect(() => {
    const el = projectAniRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      },
      {
        threshold: 0.06,
        rootMargin: '25% 0px 0px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // exp 스크롤 이벤트
  useEffect(() => {
    const el = expAniRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      },
      {
        threshold: 0.06,
        rootMargin: '25% 0px 0px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // work 섹션 네비게이션 스크롤 이벤트
  function scrollTo(section) {
    if (section === 'project') {
      projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'exp') {
      const y =
        expRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        1;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = projectSliderRef.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const children = Array.from(el.children);

        let closestIndex = 0;
        let minDiff = Infinity;

        children.forEach((child, i) => {
          const diff = Math.abs(el.scrollLeft - child.offsetLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
          }
        });

        setProjectIndex(closestIndex);
        ticking = false;
      });
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = expSliderRef.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const children = Array.from(el.children);

        let closestIndex = 0;
        let minDiff = Infinity;

        children.forEach((child, i) => {
          const diff = Math.abs(el.scrollLeft - child.offsetLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
          }
        });

        setExpIndex(closestIndex);
        ticking = false;
      });
    };

    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  //맨 위로 스크롤
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function openProject(project) {
    setActiveProject(project);
  }

  // 마우스 엔터 시 사전 로드(preload) — 모달 첫 열림 지연 완화
  function preload(file) {
    import(`../projects/${file}.jsx`).catch(() => {}); 
  };

  //메일 클립보드 저장
  function copyMail() {
    const email = 'seosson@naver.com';

    navigator.clipboard.writeText(email)
      .then(() => {
        alert('메일 주소가 복사되었습니다.');
      });
  }

  // 모바일 슬라이드 관련
  const expLength = experiences.length;

  function scrollToIndex(ref, index) {
    if (!isMobile) return;

    const el = ref.current;
    if (!el) return;

    const child = el.children[index];
    if (!child) return;

    isScrollingRef.current = true;

    el.scrollTo({
      left: child.offsetLeft,
      behavior: 'smooth',
    });

    // 스크롤 버벅임 방지
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 400);
  }

  function handlePrev(type) {
    if (type === 'project') {
      const next = Math.max(projectIndex - 1, 0);
      setProjectIndex(next);
      scrollToIndex(projectSliderRef, next);
    }

    if (type === 'exp') {
      const next = Math.max(expIndex - 1, 0);
      setExpIndex(next);
      scrollToIndex(expSliderRef, next);
    }
  }

  function handleNext(type, length) {
    if (!isMobile) return;

    if (type === 'project') {
      const next = Math.min(projectIndex + 1, length - 1);
      setProjectIndex(next);
      scrollToIndex(projectSliderRef, next);
    }

    if (type === 'exp') {
      const next = Math.min(expIndex + 1, length - 1);
      setExpIndex(next);
      scrollToIndex(expSliderRef, next);
    }
  }

  


  return (
  <div className='mainCont'>
    <div className="gnbInitWrap">
      <div className={`gnb ${showGnb ? 'show' : 'hide'} ${gnbTheme}`}>
        <div className="gnb_inner">
          <div className="logo" onClick={() => scrollToSection('main')}>
            로고
          </div>

          <div className="menu">
            <Button 
              className={activeSection === 'main' ? 'on' : ''} 
              onClick={() => scrollToSection('main')}
            >
              Main
            </Button>

            <Button 
              className={activeSection === 'about' ? 'on' : ''} 
              onClick={() => scrollToSection('about')}
            >
              About
            </Button>

            <Button 
              className={activeSection === 'project' ? 'on' : ''} 
              onClick={() => scrollToSection('project')}
            >
              Project
            </Button>

            <Button 
              className={activeSection === 'exp' ? 'on' : ''} 
              onClick={() => scrollToSection('exp')}
            >
              Experience
            </Button>
          </div>
          <div className="right">
            <Button 
              className="contactBtn"
              onClick={() => scrollToSection('contact')
            }>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>    
    <main className={heroStart ? "hero_start" : ""}>
      <div className="pos">
        {showSpline && (
        <div className="spline_fixed">
          <Spline scene={require(`../assets/images/scene-clean.splinecode`)} />
        </div>
        )}
        <div className="main_bg"></div>
        <div className="intro_mask"></div>
        <div className="myname_wrap">
          <h2 className="myname">
            SHIN WOO JAE
          </h2>
        </div>
      </div>
    </main>
    <section className="about" ref={aboutRef}>
      <div className="about_left">
        <h3>About me</h3>
        <div className="about_profile">

        </div>
        <p className="about_period">2021.09 - 2025.10 <span></span> 4년 11개월</p>
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
      <nav className="work_nav">
        <Button id="project"
          className={activeNav === 'project' ? 'on' : ''}
          onClick={() => scrollTo('project')}      
        >
          Project
        </Button>
        <Button id="exp"
          className={activeNav === 'exp' ? 'on' : ''}
          onClick={() => scrollTo('exp')}
        >
          Experience
        </Button>
      </nav>
      <div className="work_right">
        <div className='project_cont' ref={projectRef}>
          <div className="project_ani" ref={projectAniRef}>
            <div className="project_slider_wrap">
              {isMobile && projectIndex > 0 && (
                <Button
                 className="arrow prev" 
                 onClick={() => handlePrev('project')} 
                 />
              )}
              <ul ref={projectSliderRef} className="slider">
                {projects.map((p) => (
                <li key={p.id} className="project-item" onClick={() => openProject(p)} onMouseEnter={() => preload(p.file)}>
                  <div className="project_wrap">
                    <div className="project_thumbnail">
                      <img src={require(`../assets/images/${p.file}_thumb.png`)} alt={p.title} />
                    </div>
                    <div className="project_details">
                      <div className="project_title">{p.title}</div>
                      <div className="project_label">{p.label}</div>
                      <div className="project_tag">
                        {p.tag?.map((tag, idx) => (
                          <span key={idx} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="project_period">{p.period}</p>
                    </div>
                  </div>                     
                  <div className="project_actions">
                    <div className="por">
                        <h5>{p.title}</h5>
                        <Button 
                          onClick={() => openProject(p)} 
                          onMouseEnter={() => preload(p.file)}>
                            자세히보기
                          </Button>
                    </div>                
                  </div>
                </li>
                ))}
              </ul>
              {isMobile && projectIndex < projects.length - 1 && (
                <Button 
                  className="arrow next" 
                  onClick={() => handleNext('project', projects.length)} 
                />
              )}
              {isMobile && (
                <div className="dots">
                  {projects.map((_, i) => (
                    <Button
                      key={i}
                      className={i === projectIndex ? 'on' : ''}
                      onClick={() => {
                        setProjectIndex(i);
                        scrollToIndex(projectSliderRef, i);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="exp_cont" ref={expRef}>
          <div className="exp_ani" ref={expAniRef}>
            <div className="exp_slider_wrap">
              {isMobile && expIndex > 0 && (
                <Button 
                  className="arrow prev" 
                  onClick={() => handlePrev('exp')} 
                />
              )}
              <ul className="exp_list slider" ref={expSliderRef}>
                {experiences.map((exp) => (
                  <li key={exp.id}>
                    <table>
                      <tbody>
                        <tr>
                          <th>업무명</th>
                          <td>{exp.title}</td>
                        </tr>
                        <tr>
                          <th>기간</th>
                          <td>{exp.period}</td>
                        </tr>
                        <tr>
                          <th>성과</th>
                          <td>
                            {exp.achievement.split('\n').map((line, idx) => (
                              <React.Fragment key={idx}>
                                {line}
                                {idx !== exp.achievement.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </td>
                        </tr>
                        <tr>
                          <th>역할</th>
                          <td className={exp.id >= 4 ? "role" : ""}>
                            <ul className={exp.id < 4 ? "role" : ""}>
                              {exp.roles.map((role, rIdx) => (
                                <li key={rIdx}>
                                  {role.title}
                                  {role.details && role.details.map((desc, dIdx) => (
                                    <div key={dIdx}>{desc}</div>
                                  ))}
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th>기술</th>
                          <td>
                            <ul className="skills">
                              {exp.skills.map((skill, sIdx) => (
                                <li key={sIdx}>{skill}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                ))}
              </ul>
              {isMobile && expIndex < expLength - 1 && (
                <Button 
                  className="arrow next" 
                  onClick={() => handleNext('exp', expLength)} 
                />
              )}
              {isMobile && (
                <div className="dots">
                  {Array.from({ length: expLength }).map((_, i) => (
                    <Button
                      key={i}
                      className={i === expIndex ? 'on' : ''}
                      onClick={() => {
                        setExpIndex(i);
                        scrollToIndex(expSliderRef, i);
                      }}
                    />
                  ))}
                </div>
              )}
            </div> 
          </div>
        </div>
      </div>
    </section>
    <section className="contact" ref={contactRef}>
      <div className="contact_contents">
          <h3>Contact</h3>
          <div className="contact_info">
            <p>+82 10-4027-1487</p>
            <div className="mail" onClick={copyMail}>
              seosson@naver.com
              <div className="copyBtn">메일 복사버튼</div>
            </div>            
          </div>
          <h5 className="copyright">@Copyright 2026. shinwoojae All rights reserved.</h5>
          {/* <span className="thanksTxt">Thank you</span> */}
      </div>        
        
    </section>
    <div className="floating">
      <div className="resume">
          <Button
            id="goResume"
            href={`/resume`} target="_blank"
          >
            <img width="20" height="20" src={require(`../assets/images/icon_resume.png`)} alt="resume"/>
          </Button>
      </div>
      <div className="copyMail">
        <Button
          id="copyMail"
          onClick={copyMail}
        >
          <img width="20" height="20" src={require(`../assets/images/icon_mail.png`)} alt="mail"/>
        </Button>
      </div>
      <div className="goTop">
        <Button
          id="goTop"
          onClick={scrollToTop}
        >
          <img width="20" height="20" src={require(`../assets/images/icon_goTop.png`)} alt="goTop"/>
        </Button>
      </div>                  
    </div>
    <Modal 
      isOpen={!!activeProject} 
      onClose={() => setActiveProject(null)} 
      project={activeProject}
    >
    <ErrorBoundary>
      <Suspense fallback={<div className="modal-loading"></div>}>
        {ActiveComponent ? <ActiveComponent /> : null}
      </Suspense>
    </ErrorBoundary>
    </Modal>
  </div>
  );
}