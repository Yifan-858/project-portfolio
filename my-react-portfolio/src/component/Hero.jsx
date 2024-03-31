import { StarBubble } from "./canvas/StarBubble";

export const Hero = () => {
  return (
    <section className="hero-section">
      <article>
        <h4>Hi, I&#39;m Yifan!</h4>
        <h1>Frontend Developer</h1>
        <p>
          Yifan is an exceptional developer known for her innovative solutions
          and exceptional coding abilities. She creates user-friendly
          applications and solves complex issues with ease. Her drive for
          excellence makes her a valuable asset to any project and a standout in
          the technology field.
        </p>
      </article>
      <StarBubble />
      <div className="scroll-indicator"></div>
    </section>
  );
};
