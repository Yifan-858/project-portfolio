import { StarBubble } from "./canvas/StarBubble";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <article>
          <h4>YIFAN WANG</h4>
          <h1>Frontend Developer</h1>
        </article>
        <StarBubble />
      </div>
      <div className="scroll-indicator"></div>
    </section>
  );
};
