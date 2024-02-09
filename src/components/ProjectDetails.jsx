import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";
import "../css/project.css";
import { Footer } from "./Footer";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const ProjectDetails = () => {
  const { projectId } = useParams();
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
        <div className="d-flex justify-content-between">
          <div className="nav-containers">
            {projectIdVal < 1 ? (
              <h5 className="pro-nav-title">Go right</h5>
            ) : (
              <h5 className="pro-nav-title">{projectsData[projectIdVal - 1]["details header"]}</h5>
            )}
            <button
              className="pro-nav-btns"
              style={noPrevious}
              onClick={() => previousProject(projectIdVal)}
            >
              <BsChevronLeft className="pb-1" />
              Previous
            </button>
          </div>
          <div className="nav-containers justify-self-end">
            {projectIdVal === projectsData.length - 1 ? (
              <h5 className="pro-nav-title">Go left</h5>
            ) : (
              <h5 className="pro-nav-title">{projectsData[projectIdVal + 1]["details header"]}</h5>
            )}
            <button
              className="pro-nav-btns"
              style={noNext}
              onClick={() => nextProject(projectIdVal)}
            >
              Next
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
