import logo from "../../assets/my-logo.png";
import linkedin from "../../assets/linkedin-logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <section id="Header">
      <div className="logo-container">
        <img src={logo} alt="logo" width={140} />
      </div>
      <div className="navbar-container">
        <ul>
          <li>
            WORK
          </li>
          <li>
            <button className="contact-btn">
            <a href="mailto:antovaangela.com">CONTACT</a></button>
          </li>
          <hr id="hr" />
          <li>
            <a
              href="https://www.linkedin.com/in/angelaantova/"
              target="_blank"
              rel="noreferrer"
            >
              <img id="linkedin-icon" src={linkedin} alt="linkedin-profile" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
