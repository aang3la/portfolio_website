import "./Projects.css";
import { projects_data } from "../../projects_data";

export const Projects = () => {
  return (
    <section id="Projects">
      <h4 className="small-headings">PROJECTS</h4>
      <div className="project">
        {projects_data.map((project, i) => (
          <div className="project-container" key={i}>
            <div className="projects-left">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <button>
                <a href={project.url}>VIEW WEBSITE</a>
              </button>
            </div>
            <hr />
            <div className="projects-right">
              <img src={project.image} alt={project.name} width={800} height={600}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
