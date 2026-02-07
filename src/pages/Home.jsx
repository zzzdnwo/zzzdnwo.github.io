import React, { useState, useMemo, Suspense, useRef, useEffect } from 'react';
import '../assets/scss/main.scss';
import Modal from '../components/Modal';
import ErrorBoundary from '../components/ErrorBoundary';


const projects = [
  { id: '123', label: '프로그램 메뉴얼 가이드 사이트 리뉴얼 프로젝트', title: '뉴젠보드', file: 'nzBoard', tag: ['반응형', 'React'], period: '2025.06 - 2025.10' },
  { id: '124', label: '리포트 툴 웹 페이지 화 프로젝트', title: '제트리포트', file: 'zReport', tag: ['반응형', 'React'], period: '2024.09 - 2025.01' },
  { id: '125', label: '업체 재무 데이터 대시보드 프로젝트', title: '비욘드 재무보고서', file: 'beyond', tag: ['반응형', 'React'], period: '2024.06 - 2024.09' },
  { id: '126', label: '세무 비즈니스 플랫폼 프로젝트', title: '비즈북스', file: 'bizbooks', tag: ['반응형', 'React'], period: '2021.06 - 2025.10' },
  { id: '127', label: '대표 홈페이지 및 마이크로사이트 운영·리뉴얼', title: '홈페이지 유지보수', file: 'nzBoard', tag: ['반응형', 'React'], period: '재직 기간 전반 (상시 신규 제작 및 유지보수)' }
  // { id: '128', label: '151', title: 'Aproject 5', file: 'nzBoard', tag: ['반응형', 'React'], period: '2025.05 - 2025.07' },
  // { id: '129', label: '152', title: 'Aproject 5', file: 'nzBoard', tag: ['반응형', 'React'], period: '2025.05 - 2025.07' },
];


export default function Home() {
  const [activeFile, setActiveFile] = useState(null);
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
    if (!activeFile) return null;
    return React.lazy(() => import(`../projects/${activeFile}.jsx`));
  }, [activeFile]);




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

  function openProject(file) {
    setActiveFile(file); 
  };
  function closeProject() {
    setActiveFile(null); 
  };

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
        <p className="about_period">2021.09 - 2025.10 <span></span> 4년 10개월</p>
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
                Q. 어떤 방식으로 일하는 걸 중요하게 생각하나요?
              </span>
              <p className="qna_answer">
                안녕하세요. <strong>망고의 손톱</strong> 입니다. <br />
                퉁퉁퉁사후르 퉁퉁퉁
              </p>
            </div>
            <div className="qna">
              <span className="qna_question">
                Q. 어떤 방식으로 일하는 걸 중요하게 생각하나요?
              </span>
              <p className="qna_answer">
                안녕하세요. <strong>망고의 손톱</strong> 입니다. <br />
                퉁퉁퉁사후르 퉁퉁퉁
              </p>
            </div>
            <div className="qna">
              <span className="qna_question">
                Q. 개발자로서 성장하기 위해 어떤 노력을 해왔나요?
              </span>
              <p className="qna_answer">
                안녕하세요. <strong>망고의 손톱</strong> 입니다. <br />
                퉁퉁퉁사후르 퉁퉁퉁
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
                      <button onClick={() => openProject(p.file)} onMouseEnter={() => preload(p.file)}>자세히보기</button>
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
    <Modal isOpen={!!activeFile} onClose={closeProject} title={activeFile ? projects.find(x => x.file === activeFile)?.title : ''}>
    <ErrorBoundary>
    <Suspense fallback={<div className="modal-loading">로딩중...</div>}>
    {ActiveComponent ? <ActiveComponent /> : null}
    </Suspense>
    </ErrorBoundary>
    </Modal>
  </div>
  );
}