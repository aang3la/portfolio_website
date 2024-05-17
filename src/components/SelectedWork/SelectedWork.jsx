import "./SelectedWork.css";
import stock_dolphin from "../../assets/project_stock_dolphin.png";
import { Link } from "react-router-dom";

export const SelectedWork = () => {
  return (
    <section id="Selected-work">
      <div className="selected-work-left-continer">
        <div>
          <h1>SELECTED WORK</h1>
          <p>
            Having worked on a big project for IT Labs (software company). The
            project was given from my JavaScript Academy, where I used
            everything that we learned. Started the project from a given Figma
            design and implemented with code, using React combined with Node.js,
            and MongoDB for storing data.
          </p>
          <Link to="/work">
            <button>SEE ALL WORK</button>
          </Link>
        </div>
        <hr />
      </div>
      <div className="selected-work-container">
        <div className="selected-work-right">
          <img src={stock_dolphin} width={750} />
          <div className="work-content">
            <div>
              <h3>Stock Dolphin</h3>
              <p>
                Innovative Inventory System designed to revolutionize the way
                offices manage and stock their supplies.
              </p>
            </div>
            <div>
              <button className="github-btn">
                <a
                  href="https://github.com/aang3la/Stock_Dolphin"
                  target="blank"
                >
                  VIEW ON GITHUB
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
