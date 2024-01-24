import React from "react";
import "../css/about.css";
import { FaBinoculars } from "react-icons/fa";

export const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h1 className="about-header mb-4">About Us</h1>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          quod! Sequi enim nihil, culpa molestias obcaecati iste tempore
          explicabo eius, ipsum eligendi quam similique ullam nisi! Corrupti
          inventore ipsam repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis, quod! Sequi enim nihil, culpa molestias
          obcaecati iste tempore
        </p>
        <div className="about-btn-container mt-5">
          <button className="btn-main">
            Read more <FaBinoculars className="ms-3" />
          </button>
        </div>
      </div>
      <div className="image-container d-flex justify-content-center">
        <img
          src="https://images.pexels.com/photos/3104719/pexels-photo-3104719.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="CEO"
          className="about-ceo"
        />
      </div>
    </div>
  );
};
