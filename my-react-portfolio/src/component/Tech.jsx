import { SkillBallsCanvas } from "./canvas/SkillBalls";
import data from "../constants/data.json";

export const Tech = () => {
  return (
    <section className="tech-section">
      <h1>Tech</h1>
      <div className="skill-list">
        {data.tech.map((technology) => (
          <SkillBallsCanvas key={technology.name} icon={technology.icon} />
        ))}
        {data.tech.map((technology) => (
          <p key={technology.name}>{technology.name}</p>
        ))}
      </div>
    </section>
  );
};
