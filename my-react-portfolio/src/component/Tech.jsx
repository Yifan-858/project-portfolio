import { SkillBalls } from "./canvas/SkillBalls";

export const Tech = () => {
  return (
    <section className="tech-section">
      <h1>Tech</h1>
      <div className="skill-list">
        <SkillBalls />
        <ul>
          <p>data from json</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>SASS</li>
          <li>Node.js</li>
          <li>Mongo DB</li>
          <li>Three.js</li>
          <li>Git</li>
          <li>Figma</li>
        </ul>
      </div>
    </section>
  );
};
