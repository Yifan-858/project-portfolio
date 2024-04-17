import data from "../constants/data.json";

export const Projects = () => {
  return (
    <section className="projects-section" id="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-display">
        {data.projects.map((project) => (
          <div className="each-project" key={project.name}>
            <img
              className="project-img"
              src={project.image}
              alt={project.name}
              loading="lazy"
            />
            <div className="project-text">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-list">
                {project.tech.map((technology, index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
              <div className="project-link">
                <a href={project.demo} target="_blank">
                  <p>
                    <span>Live demo</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </a>
                <a href={project.code} target="_blank">
                  <p>
                    <span>View code</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
