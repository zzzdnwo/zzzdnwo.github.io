import React, { useState } from 'react';
import ImageModal from './ImageModal';
import ProjectAccordion from './ProjectAccordion';
import ProjectGallery from './ProjectGallery';

export default function ProjectDetail({ detail }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const hasScreens = detail.screens?.length > 0;

  return (
    <article className="project_detail">
      <h2>
        {detail.summary.map((line, index) => (
          <React.Fragment key={line}>
            {line}
            {index < detail.summary.length - 1 && <br />}
          </React.Fragment>
        ))}
        <hr />
      </h2>

      <section>
        <h3>📍 프로그램 설명</h3>
        <ul>
          {detail.description.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="skillCont">
        <h3>🛠️ 기술 스택</h3>
        <div className="flexBox">
          {detail.stacks.map((item) => (
            <span key={item.name} className={`item ${item.category}`}>{item.name}</span>
          ))}
        </div>
      </section>

      <ProjectAccordion sections={detail.sections} />
      {hasScreens && (
        <>
          <ProjectGallery screens={detail.screens} onSelect={setSelectedIndex} />
          <ImageModal
            images={detail.screens}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </>
      )}
    </article>
  );
}
