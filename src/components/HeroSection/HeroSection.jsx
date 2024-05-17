import "./HeroSection.css";
import hero_img from "../../assets/hero_section.jpg";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section id="Hero-section">
      <div className="hero-left">
        <div className="hero-left-content">
          <h1>Transform your digital presence with cutting-edge technology.</h1>
          <p>
            Hi!👋🏻 I'm a developer and marketer building fast, responsive, and
            scalable web solutions from initial design concepts to fully
            functional websites.
          </p>
        </div>
        <div className="hero-left-buttons">
          <button className="contact-btn">
            <a href="mailto:antovaangela.com">CONTACT</a>
          </button>
          <Link to="work">
            <button className="work-btn">SEE PROJECTS</button>
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="hero-img" width={630} />
      </div>
    </section>
  );
};
