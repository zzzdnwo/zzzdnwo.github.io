import React, { useState, useMemo, Suspense, useRef, useEffect } from 'react';
import '../assets/scss/main.scss';
import '../assets/scss/detail.scss';
import Modal from '../components/Modal';
import ErrorBoundary from '../components/ErrorBoundary';
import projects from '../data/projects';




export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeNav, setActiveNav] = useState(null);

  const workRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  
  //애니메이션용
  const qnaAniRef = useRef(null);
  const projectAniRef = useRef(null);
  const expAniRef = useRef(null);

  // activeFile이 바뀔 때마다 lazy 컴포넌트를 만들어 반환
  const ActiveComponent = useMemo(() => {
    if (!activeProject) return null;
    return React.lazy(() => import(`../projects/${activeProject.file}.jsx`));
  }, [activeProject]);




  //useEffect 영역

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

  /* QNA 스크롤 이벤트 */
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
        threshold: 0.3,
        rootMargin: '25% 0px 0px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

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
        alert('메일 주소가 복사되었습니다!');
      });
  }

  return (
  <div className='mainCont'>
    <main>
      <div className="pos">
        <div className="main_bg"></div>
        <h2 className="myname">SHIN WOO JAE</h2>
      </div>
    </main>
    <section className="about">
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
            <div className="qna">
              <span className="qna_question">
                Q. 웹퍼블리셔를 선택한 이유는 무엇인가요?
              </span>
              <p className="qna_answer">
                디자인을 코드로 구현해 <strong>실제 서비스 환경에서 작동하는 웹을 만드는 과정</strong>에 매력을 느꼈습니다.<br />
                초기에는 마크업 중심의 작업이었지만, 프로젝트를 진행하며 웹 접근성과 크로스브라우징 이슈를 직접 대응하고<br />
                SPA 구조 전환 작업을 경험하면서 단순 구현을 넘어 구조와 흐름을 이해하는 일에 흥미를 갖게 되었습니다.<br />
                <br />
                또한 API 연동을 통해 서버 데이터를 화면에 반영하는 작업을 수행하며, 웹은 ‘보여지는 결과물’이 아니라<br />
                사용자와 끊임없이 상호작용하는 환경이라는 것을 체감했습니다.<br />
                이러한 경험을 통해 이 직무의 확장성과 깊이에 매력을 느끼게 되었고, 자연스럽게 이 길을 선택하게 되었습니다.
              </p>
            </div>
            <div className="qna">
              <span className="qna_question">
                Q. 어떤 방식으로 일하는 걸 중요하게 생각하나요?
              </span>
              <p className="qna_answer">                                
                협업 과정에서의 명확한 커뮤니케이션을 가장 중요하게 생각합니다.<br />
                 실제 프로젝트에서 기획 의도와 디자인 해석의 차이로 수정이 반복된 경험이 있었고,<br />
                 이후에는 초기 단계에서부터 <strong>기술적 제약과 구현 방식을 함께 논의</strong>하는 습관을 갖게 되었습니다.<br />
                 <br />
                 또한 화면을 구현할 때는 단순히 디자인을 재현하는 데 그치지 않고, 이후 <strong>기능 확장이나 유지보수를 고려해 구조화</strong>하려고 합니다.<br />
                 운영 단계에서 작은 구조 차이가 유지보수 난이도를 크게 좌우한다는 것을 경험했기 때문에,<br />
                 안정적으로 운영될 수 있는 결과물을 만드는 것을 중요하게 생각합니다.
              </p>
            </div>
            <div className="qna">
              <span className="qna_question">
                Q. 앞으로 어떤 개발자로 성장하고 싶나요?
              </span>
              <p className="qna_answer">
                단순 구현을 넘어, <strong>구조와 데이터 흐름을 이해하고 안정적으로 확장할 수 있는 개발자</strong>로 나아가고자 합니다.<br />
                React 기반 리뉴얼 프로젝트를 진행하며 컴포넌트 단위로 역할을 분리하고 재사용성을 고려한 구조를 고민해왔으며,<br />
                API 통신과 상태 관리를 직접 구현하며 프론트엔드 영역을 확장해왔습니다.<br />
                <br />
                앞으로는 화면의 완성도뿐 아니라 성능, 유지보수성, 데이터 흐름까지 균형 있게 고려할 수 있는 개발자로 자리 잡는 것이 목표입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="work" ref={workRef}>
      <nav className="work_nav">
        <button id="project"
          className={activeNav === 'project' ? 'on' : ''}
          onClick={() => scrollTo('project')}      
        >Project</button>
        <button id="exp"
          className={activeNav === 'exp' ? 'on' : ''}
          onClick={() => scrollTo('exp')}
        >Experience</button>
      </nav>
      <div className="work_right">
        <div className='project_cont' ref={projectRef}>
          <div className="project_ani" ref={projectAniRef}>
            <ul>
              {projects.map((p) => (
              <li key={p.id} className="project-item">
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
                      <button onClick={() => openProject(p)} onMouseEnter={() => preload(p.file)}>자세히보기</button>
                  </div>                
                </div>
              </li>
              ))}
            </ul>
          </div>
          {/* <div className="work_category">
            <button id="all">All</button>
            <button id="team">Team</button>
            <button id="single">Single</button>
          </div> */}
        </div>
        <div className="exp_cont" ref={expRef}>
          <div className="exp_ani" ref={expAniRef}>
            <ul className="exp_list">
              <li>
                <p className="period">2025.06 - 2025.10</p>
                <div className="titleCont">
                  <h4 className="title">뉴젠보드(프로그램 메뉴얼 가이드 사이트)<br />리뉴얼 프로젝트</h4>
                  <h5 className="subTitle">프로젝트 전반 React + TypeScript 구조로 리뉴얼 안정성과 유지보수성을 향상시킴.</h5>
                </div>
                <ul className="details">
                  <li>기존 프로젝트 전반을 React + TypeScript 기반 프론트엔드 설계<br /> 컴포넌트 단위 구조 설계 및 타입 정의를 통해 안정적인 UI 개발</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                </ul>
              </li>
              <li>
                <p className="period">2023.02 - 2023.08</p>
                <div className="titleCont">
                  <h4 className="title">타이틀</h4>
                  <h5 className="subTitle">@ 서브타이틀</h5>
                </div>
                <ul className="details">
                  <li>JavaScript, React 등 핵심 기술 학습 <br /> JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                </ul>
              </li>
              <li>
                <p className="period">2023.02 - 2023.08</p>
                <div className="titleCont">
                  <h4 className="title">타이틀</h4>
                  <h5 className="subTitle">@ 서브타이틀</h5>
                </div>
                <ul className="details">
                  <li>JavaScript, React 등 핵심 기술 학습 <br /> JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                </ul>
              </li>
              <li>
                <p className="period">2023.02 - 2023.08</p>
                <div className="titleCont">
                  <h4 className="title">타이틀</h4>
                  <h5 className="subTitle">@ 서브타이틀</h5>
                </div>
                <ul className="details">
                  <li>JavaScript, React 등 핵심 기술 학습 <br /> JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                </ul>
              </li>
              <li>
                <p className="period">2023.02 - 2023.08</p>
                <div className="titleCont">
                  <h4 className="title">타이틀</h4>
                  <h5 className="subTitle">@ 서브타이틀</h5>
                </div>
                <ul className="details">
                  <li>JavaScript, React 등 핵심 기술 학습 <br /> JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                  <li>JavaScript, React 등 핵심 기술 학습</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="contact">

    </section>
    <div className="floating">
      <button id="copyMail" onClick={copyMail}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 538 404" fill="none"><path d="M0.750488 0.613525V67.7139L269.152 201.915L537.553 67.7139V0.613525H0.750488ZM0.750488 134.814V403.216H537.553V134.814L269.152 269.015L0.750488 134.814Z" fill="black"></path></svg></button>
      <button id="goTop" onClick={scrollToTop}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 17" fill="none"><path d="M2 15L14 3L26 15" stroke="black" stroke-width="3" stroke-linecap="round"></path></svg></button>
    </div>
    <Modal 
      isOpen={!!activeProject} 
      onClose={() => setActiveProject(null)} 
      project={activeProject}
    >
    <ErrorBoundary>
      <Suspense fallback={<div className="modal-loading">로딩중...</div>}>
        {ActiveComponent ? <ActiveComponent /> : null}
      </Suspense>
    </ErrorBoundary>
    </Modal>
  </div>
  );
}