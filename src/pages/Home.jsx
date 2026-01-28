import React, { useState, useMemo, Suspense } from 'react';
import '../assets/scss/main.scss';
import Modal from '../components/Modal';
import ErrorBoundary from '../components/ErrorBoundary';


const projects = [
{ id: '123', label: '123', title: 'Aproject 1', file: 'Aproject1' },
{ id: '124', label: '124', title: 'Aproject 2', file: 'Aproject2' },
{ id: '125', label: '125', title: 'Aproject 3', file: 'Aproject3' },
{ id: '126', label: '126', title: 'Aproject 4', file: 'Aproject4' },
{ id: '126', label: '156', title: 'Aproject 5', file: 'Aproject5' },
];


export default function Home() {
const [activeFile, setActiveFile] = useState(null);


// activeFile이 바뀔 때마다 lazy 컴포넌트를 만들어 반환
const ActiveComponent = useMemo(() => {
if (!activeFile) return null;
return React.lazy(() => import(`../projects/${activeFile}.jsx`));
}, [activeFile]);


function openProject(file) { setActiveFile(file); }
function closeProject() { setActiveFile(null); }


// 마우스 엔터 시 사전 로드(preload) — 모달 첫 열림 지연 완화
function preload(file) { import(`../projects/${file}.jsx`).catch(() => {}); }


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
            Q. 어떤 방식으로 일하는 걸 중요하게 생각하나요?
          </span>
          <p className="qna_answer">
            안녕하세요. <strong>망고의 손톱</strong> 입니다. <br />
            퉁퉁퉁사후르 퉁퉁퉁
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="work">
    <nav className="work_nav">
      <button id="project">Project</button>
      <button id="exp">Experience</button>
    </nav>
    <div className='listTest'>
      <div className="work_category">
        <button id="all">All</button>
        <button id="team">Team</button>
        <button id="single">Single</button>
      </div>
      <ul>
      {projects.map((p) => (
      <li key={p.id} className="project-item">
      <div className="project-label">{p.label}</div>
      <div className="project-actions">
      <button onClick={() => openProject(p.file)} onMouseEnter={() => preload(p.file)}>
      간략히 보기
      </button>
      </div>
      </li>
      ))}
      </ul>
    </div>
  </section>
  <section className="fff"></section>


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