import { StarBubbleCanvas } from "./canvas/StarBubble";
import data from "../constants/data.json";

export const Hero = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-text">
        <article>
          <h4 className="name">YIFAN WANG</h4>
          <h1 className="job-title">Web Developer</h1>
          <div className="about-text">
            <img
              className="profile-img"
              src={data.contact["profile-img"]}
              alt="profile-img"
            />
            <p className="about-me first-para">
              I am a <span>Full-Stack Developer</span> with a background in
              design and 3D art. My goal is to constantly challenge myself with
              new technologies and skills, creating user-friendly and innovative
              products.
            </p>
            <p className="about-me">
              I thrive in roles where I can blend and bridge my two big
              passions: design and development.
            </p>
            <p className="about-me">
              Tech stack for this website: SASS, Three.js, React, Blender
            </p>
          </div>
        </article>
        <StarBubbleCanvas />
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};
