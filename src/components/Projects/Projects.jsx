import "./Projects.css";
import { projects_data } from "../../projects_data";

export const Projects = () => {
  return (
    <section id="Projects">
      <div className="projects-header">
        <h4 className="small-headings">PROJECTS</h4>
        <h2>Transforming visions into digital reality.</h2>
      </div>
      <hr />
      <div className="all-projects">
        {projects_data.map((project, i) => (
          <div className="project-container" key={i}>
            <div className="projects-left">
              <h1>{project.name}</h1>
              <p>{project.description}</p>

              <ul className="technologies-section">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              
              <button>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url.includes("github")
                    ? "VIEW CODE"
                    : "VIEW WEBSITE"}
                </a>
              </button>
            </div>
            <hr />
            <div className="projects-right">
              <img src={project.image} alt={project.name} width={800} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
