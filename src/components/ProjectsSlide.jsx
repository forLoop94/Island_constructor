import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Slideshow.css";
import { projectsData } from "../data.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ProjectsSlide = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    showSlides(slideIndex);
    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slideIndex]);

  const showSlides = (n) => {
    const slides = slidesRef.current.children;
    const dots = document.getElementsByClassName("dot");
    let newIndex = n;

    if (n > projectsData.length) {
      newIndex = 1;
    } else if (n < 1) {
      newIndex = projectsData.length;
    }

    for (let i = 0; i < projectsData.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active-dot");
    }

    slides[newIndex - 1].style.display = "block";
    dots[newIndex - 1].classList.add("active-dot");
    setSlideIndex(newIndex);
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const handleDotClick = (index) => {
    showSlides(index + 1);
  };

  return (
    <div className="slideshow-container">
      <div className="slides" ref={slidesRef}>
        {projectsData.map((data, index) => (
          <div className="project-slide" key={index}>
            <img src={data.image} alt={`Image ${index + 1}`} />
            <div className="project-text d-flex align-items-center h-100 w-100 flex-column">
              <h1 className="text-white">{data["details header"]}</h1>
              <p className="text-white">{data["details body"]}</p>
            </div>
            <div className="pro-btn-wrapper">
              <button
                className="btn-dark-bg"
                onClick={() => navigate(`/projects/${index}`)}
              >
                See details
              </button>
            </div>
          </div>
        ))}
      </div>
      <a className="prev" onClick={() => plusSlides(-1)}>
        <BsChevronLeft />
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
          <BsChevronRight />
      </a>
      <div className="slide-indicator">
        {projectsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex - 1 ? "active-dot" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlide;
