import logo from "../../assets/my-logo.png";
import linkedin from "../../assets/linkedin-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="Header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" width={140} />
        </Link>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar-container ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <Link to="/" className="nav-link">
            <li className="nav-element">HOME</li>
          </Link>
          <Link to="/work" className="nav-link">
            <li className="nav-element" onClick={toggleMenu}>
              <span id="symbols">&#x3c;</span>WORK
              <span id="symbols">/&#x3e;</span>
            </li>
          </Link>
          <div className="nav-buttons">
          <li className="nav-element">
            <button className="contact-btn" onClick={toggleMenu}>
              <a href="mailto:antovaangela.com">CONTACT</a>
            </button>
          </li>
          <hr id="hr" />
            <li className="nav-element">
              <a
                href="https://www.linkedin.com/in/angelaantova/"
                target="_blank"
                rel="noreferrer"
                onClick={toggleMenu}
              >
                <img id="linkedin-icon" src={linkedin} alt="linkedin-profile" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};
