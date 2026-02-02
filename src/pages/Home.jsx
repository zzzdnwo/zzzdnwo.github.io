import React, { useState, useMemo, Suspense, useRef, useEffect } from 'react';
import '../assets/scss/main.scss';
import Modal from '../components/Modal';
import ErrorBoundary from '../components/ErrorBoundary';


const projects = [
  { id: '123', label: '이리저리 요리저리', title: '보드화면 프로토타입', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '124', label: '124', title: 'Aproject 2', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '125', label: '125', title: 'Aproject 3', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '126', label: '126', title: 'Aproject 4', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '127', label: '156', title: 'Aproject 5', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '128', label: '151', title: 'Aproject 5', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '129', label: '152', title: 'Aproject 5', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '130', label: '153', title: 'Aproject 5', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '131', label: '154', title: 'Aproject 5', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '132', label: '155', title: 'Aproject 5', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '133', label: '156', title: 'Aproject 5', file: 'Aproject1', tag: ['반응형', 'React'] },
  { id: '134', label: '157', title: 'Aproject 5', file: 'Aproject1', tag: ['반응형', 'React'] },
];


export default function Home() {
  const [activeFile, setActiveFile] = useState(null);
  const [activeNav, setActiveNav] = useState(null);

  const workRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  
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
      </div>
      <div className="about_right">
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
          {/* <div className="work_category">
            <button id="all">All</button>
            <button id="team">Team</button>
            <button id="single">Single</button>
          </div> */}
          <ul>
          {projects.map((p) => (
          <li key={p.id} className="project-item">
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
            </div>                     
            <div className="project_actions">
            <button onClick={() => openProject(p.file)} onMouseEnter={() => preload(p.file)}>
            간략히 보기
            </button>
            </div>
          </li>
          ))}
          </ul>
        </div>
        <div className="exp_cont" ref={expRef}>
          <ul className="exp_list">
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
    </section>
    <section className="contact">

    </section>


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