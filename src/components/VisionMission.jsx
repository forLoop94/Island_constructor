import { FaBinoculars } from "react-icons/fa6";
import "../css/about.css";

export const VisionMission = () => {
  return (
    <div className="about vision-mission gap-5">
      <div className="objectives-text">
        <h2 className="about-header objectives-header">Corporate Objectives</h2>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          deleniti mollitia accusamus, fugiat delectus dicta aspernatur harum!
          Eum repellendus voluptatum recusandae sed, reprehenderit iusto,
          eligendi vitae quos libero ducimus quasi.
        </p>
        <div className="about-btn-container mt-3 d-flex">
            <button className="btn-dark-bg">
              Read more <FaBinoculars className="ms-3" />
            </button>
          </div>
      </div>
      <div className="vision-mission-text">
        <div>
          <h2 className="about-header text-align">Vision</h2>
          <p className="about-paragraph text-align">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cumque quo porro itaque modi hic praesentium, commodi rem
            necessitatibus aspernatur!
          </p>
        </div>
        <div>
          <h2 className="about-header text-align">Mission</h2>
          <p className="about-paragraph text-align">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            nulla quos esse natus officia odio dignissimos.
          </p>
          <div className="mt-3 d-flex align-btn-left">
            <button className="btn-main">
              Read more <FaBinoculars className="ms-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
