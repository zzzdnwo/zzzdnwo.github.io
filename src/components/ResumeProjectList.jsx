export default function ResumeProjectList({ experiences }) {
  return (
    <div className="project_list">
      {experiences.map((experience) => (
        <div key={experience.id} className="project_item">
          <h3 className="project_name">{experience.title}</h3>
          <p className="project_period">{experience.period}</p>
          <h4 className="project_result">{experience.resumeAchievement || experience.achievement}</h4>
          <hr />
          <ol className="project_role">
            {experience.roles.map((role) => (
              <li key={role.title}>
                <span>{role.title.replace(/^\d+\.\s*/, '')}</span>
                {role.details?.length > 0 && (
                  <ul>
                    {role.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
