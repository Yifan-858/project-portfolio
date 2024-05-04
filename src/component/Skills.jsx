import data from "../constants/data.json";

export const Skills = () => {
  return (
    <section className="skills-section" id="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-text-container">
        {data.skills.map((skill) => (
          <div className="code-skills" key={skill.title}>
            <h3 className="skill-title">{skill.title}</h3>
            <ul className="skill-list">
              <li>{skill.skillname}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
