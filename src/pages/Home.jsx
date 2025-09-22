import React, { useState, useMemo, Suspense } from 'react';
import '../assets/scss/main.scss';
import Modal from '../components/Modal';
import ErrorBoundary from '../components/ErrorBoundary';


const projects = [
{ id: '123', label: '123', title: 'Aproject 1', file: 'Aproject1' },
{ id: '124', label: '124', title: 'Aproject 2', file: 'Aproject2' },
{ id: '125', label: '125', title: 'Aproject 3', file: 'Aproject3' },
{ id: '126', label: '126', title: 'Aproject 4', file: 'Aproject4' },
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
<>
<main>
<h2 className="myname">SHIN WOO JAE</h2>
</main>


<section className='listTest'>
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
</section>


<Modal isOpen={!!activeFile} onClose={closeProject} title={activeFile ? projects.find(x => x.file === activeFile)?.title : ''}>
<ErrorBoundary>
<Suspense fallback={<div className="modal-loading">로딩중...</div>}>
{ActiveComponent ? <ActiveComponent /> : null}
</Suspense>
</ErrorBoundary>
</Modal>
</>
);
}