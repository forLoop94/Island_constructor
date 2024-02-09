import React from "react";
import { projectsData } from "../data";
import { BsChevronRight } from "react-icons/bs";
import "../css/project.css";
import { Footer } from "./Footer";
import { Navigate, useNavigate } from "react-router-dom";

const ProjectsOverview = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="pro-details-container">
        <h1>PROJECTS OVERVIEW</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a
          praesentium distinctio dolor ducimus delectus eius, at nobis natus
          earum. Enim aliquam rerum hic repellat aut dolore, odio est adipisci
          tempore placeat maiores tempora, optio quo sint, numquam magni
          reprehenderit?
        </p>
        <h3>All Projects</h3>
        <div className="grid-container">
          {projectsData.map((project, index) => (
            <div className="grid-item" key={index}>
              <img
                className="w-100"
                src={project.image}
                alt={project["details header"]}
              />
              <div className="overview-text d-flex justify-content-between w-100">
                <h5>{project["details header"]}</h5>
                <button className="detail-btns" onClick={() => navigate(`/projects/${index}`)}>
                  <BsChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProjectsOverview;
