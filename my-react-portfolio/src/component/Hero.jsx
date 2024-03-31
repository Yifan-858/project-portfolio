import { StarBubble } from "./canvas/StarBubble";

export const Hero = () => {
  return (
    <section className="hero-section">
      <article>
        <h4>Hi, I&#39;m Yifan!</h4>
        <h1>Frontend Developer</h1>
      </article>
      <StarBubble />
      <div className="scroll-indicator"></div>
    </section>
  );
};
