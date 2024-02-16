import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data";
import "../css/project.css";
import { Footer } from "./Footer";
import {
  BsChevronLeft,
  BsChevronRight,
  BsGrid3X3GapFill,
} from "react-icons/bs";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [projectIdVal, setProjectIdVal] = useState(parseFloat(projectId));
  const projectDetail = projectsData[projectIdVal];

  const previousProject = (n) => {
    if (n === 0) {
      return;
    }
    setProjectIdVal(n - 1);
  };

  const nextProject = (n) => {
    if (n === projectsData.length - 1) {
      return;
    }
    setProjectIdVal(n + 1);
  };

  const noPrevious = {
    color: projectIdVal === 0 ? "grey" : "",
  };

  const noNext = {
    color: projectIdVal === projectsData.length - 1 ? "grey" : "",
  };

  if (!projectDetail) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="pro-details-container">
        <div className="project-details-headline">
          <h4 className="pro-details-title primary-text">
            {projectDetail["details header"]}
          </h4>
          <img
            src={projectDetail.image}
            alt={projectDetail["details header"]}
          />
        </div>
        <div className="primary-text pt-5">{projectDetail["details body"]}</div>
        <div className="mid-page d-flex justify-content-between">
          <div className="nav-containers d-flex flex-column">
            <button
              className="pro-nav-btns-left"
              style={noPrevious}
              onClick={() => previousProject(projectIdVal)}
            >
              <BsChevronLeft className="pb-1" />
              Previous
            </button>
            {projectIdVal < 1 ? (
              <h5 className="pro-nav-title"></h5>
            ) : (
              <h5 className="pro-nav-title">
                {projectsData[projectIdVal - 1]["details header"]}
              </h5>
            )}
          </div>
          <div className="d-flex overview-container flex-column align-items-center justify-content-center" onClick={() => navigate("/projects-overview")}>
            <BsGrid3X3GapFill className="overview-icon" />
            <small className="sm-text">overview</small>
          </div>
          <div className="nav-containers d-flex flex-column">
            <button
              className="pro-nav-btns"
              style={noNext}
              onClick={() => nextProject(projectIdVal)}
            >
              Next
              <BsChevronRight />
            </button>
            {projectIdVal === projectsData.length - 1 ? (
              <h5 className="pro-nav-title text-end"></h5>
            ) : (
              <h5 className="pro-nav-title text-end">
                {projectsData[projectIdVal + 1]["details header"]}
              </h5>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
