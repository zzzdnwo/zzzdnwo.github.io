import Button from './Button';

export default function ProjectCard({ project, onOpen, onPreload }) {
  const preloadProject = () => onPreload(project.file);

  return (
    <li className="project-item" onMouseEnter={preloadProject}>
      <Button
        className="project_trigger"
        onClick={() => onOpen(project)}
        onFocus={preloadProject}
        aria-label={`${project.title} 자세히 보기`}
      >
        <span className="project_wrap">
          <span className="project_thumbnail">
            <img
              src={require(`../assets/images/${project.file}_thumb.png`)}
              alt={project.title}
              loading="lazy"
              decoding="async"
            />
          </span>
          <span className="project_details">
            <span className="project_title">{project.title}</span>
            <span className="project_label">{project.label}</span>
            <span className="project_tag">
              {project.tag?.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </span>
            <span className="project_period">{project.period}</span>
          </span>
        </span>
        <span className="project_actions" aria-hidden="true">
          <span className="por">
            <span className="project_action_title">{project.title}</span>
            <span className="project_action_icon">자세히보기</span>
          </span>
        </span>
      </Button>
    </li>
  );
}
