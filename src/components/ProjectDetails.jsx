import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const projectDetail = projectsData[parseFloat(projectId)];
  console.log(projectDetail)

  if(!projectDetail) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <img src={projectDetail.image} alt="" />
      <h4>{projectDetail["details header"]}</h4>
      <div>{projectDetail["details body"]}</div>
      <div className="d-flex justify-content-between p-5">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </section>
  );
};
