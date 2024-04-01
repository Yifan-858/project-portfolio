import { SkillBalls } from "./canvas/SkillBalls";
import data from "../constants/data.json";

export const Tech = () => {
  return (
    <section className="tech-section">
      <h1>Tech</h1>
      <div className="skill-list">
        {data.tech.map((technology) => (
          <SkillBalls icon={technology.icon} />
        ))}
        {data.tech.map((technology) => (
          <ul>
            <li key={technology.name}>{technology.name}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};
