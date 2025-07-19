import './ProjectCard.css';

const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
      </div>
      
      <div className="project-card-body">
        <p className="project-description">{description}</p>
        
        <div className="project-skills">
          <h4 className="skills-title">Technologies Used:</h4>
          <div className="skills-list">
            {skills.map((skill, id) => (
              <span key={id} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="project-card-footer">
        <div className="project-links">
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link demo-link"
            >
              🚀 Live Demo
            </a>
          )}
          {source && (
            <a 
              href={source} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link source-link"
            >
              📂 Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;