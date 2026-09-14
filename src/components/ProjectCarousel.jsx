import Button from './Button';
import ProjectCard from './ProjectCard';

export default function ProjectCarousel({ isMobile, projects, slider, onOpen, onPreload }) {
  return (
    <div className="project_slider_wrap">
      {isMobile && slider.index > 0 && (
        <Button className="arrow prev" onClick={slider.goToPrevious} aria-label="이전 프로젝트" />
      )}
      <ul ref={slider.sliderRef} className="slider">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={onOpen}
            onPreload={onPreload}
          />
        ))}
      </ul>
      {isMobile && slider.index < projects.length - 1 && (
        <Button className="arrow next" onClick={slider.goToNext} aria-label="다음 프로젝트" />
      )}
      {isMobile && (
        <div className="dots" aria-label="프로젝트 슬라이드 선택">
          {projects.map((project, index) => (
            <Button
              key={project.id}
              className={index === slider.index ? 'on' : ''}
              onClick={() => slider.scrollToIndex(index)}
              aria-label={`${project.title} 보기`}
              aria-current={index === slider.index ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
