import React from 'react';

export default function ProjectGallery({ screens, onSelect }) {
  return (
    <section className="project_screen">
      <h3>
        💻 작업 화면
        <p>이미지 클릭 시 크게 볼 수 있습니다. (작업화면이 현재와 다를 수 있습니다.)<br />* 저작권 이슈가 있는 경우 첨부하지 않았습니다.</p>
      </h3>
      <div className="gridBox">
        {screens.map((screen, index) => (
          <button
            key={screen.label}
            type="button"
            className="screen_item"
            onClick={() => onSelect(index)}
            aria-label={`${screen.label} 확대 보기`}
          >
            <img src={screen.thumbnail} alt={`${screen.label} 작업 화면`} loading="lazy" decoding="async" />
            <span className="item_title">{screen.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
