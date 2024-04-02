import { SkillBallsCanvas } from "./canvas/SkillBalls";
import data from "../constants/data.json";

export const Tech = () => {
  return (
    <section className="tech-section">
      <h1>Tech</h1>
      <div className="skill-list">
        <div className="skill-canvas">
          {data.tech.map((technology) => (
            <SkillBallsCanvas key={technology.name} icon={technology.icon} />
          ))}
        </div>
        <div className="skill-description">
          {data.tech.map((technology) => (
            <p key={technology.name}>{technology.name}</p>
          ))}
        </div>
      </div>
    </section>
  );
};