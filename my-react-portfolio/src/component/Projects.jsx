import data from "../constants/data.json";

export const Projects = () => {
  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="project-display">
        {data.projects.map((project) => (
          <div className="each-project" key={project.name}>
            <h3 className="project-title">{project.name}</h3>
            <p>{project.description}</p>
            <ul>
              {project.tech.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
            <div className="project-link">
              <a href={project.demo}>
                <p>View project</p>
              </a>
              <a href={project.code}>
                <p>View code</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
