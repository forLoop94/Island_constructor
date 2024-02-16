import { useState, useEffect, useRef } from "react";
import "../css/Slideshow.css";
import image1 from "../assets/auth-pages-bg.jpg";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesRef = useRef(null);

  useEffect(() => {
    showSlides(slideIndex);
    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [slideIndex]);

  const showSlides = (n) => {
    const slides = slidesRef.current.children;
    const dots = document.getElementsByClassName("dot");
    let newIndex = n;

    if (n > 3) {
      newIndex = 1;
    } else if (n < 1) {
      newIndex = 3;
    }

    for (let i = 0; i < 3; i++) {
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
        <div className="slide">
          <img src="https://images.pexels.com/photos/53176/architecture-iron-steel-building-53176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
          <div className="label-container d-flex align-items-center w-100 h-100 flex-column">
            <div className="label">Seyi_Daniels & Co.</div>
            <p className="label">Changing lives...</p>
          </div>
        </div>
        <div className="slide">
          <img
            src="https://images.pexels.com/photos/53212/one-world-trade-center-manhattan-owtc-new-york-53212.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 2"
          />
          <div className="label-container d-flex align-items-center w-100 h-100 flex-column">
            <p className="label">Build your dream home with</p>
            <div className="label">Seyi_Daniels & Co.</div>
          </div>
        </div>
        <div className="slide">
          <img
            src="https://images.pexels.com/photos/2689253/pexels-photo-2689253.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 3"
          />
          <div className="label-container d-flex align-items-center w-100 h-100 flex-column">
            <div className="label">Seyi_Daniels & Co.</div>
            <p className="label">Saving dreams...</p>
          </div>
        </div>
      </div>
      <div className="slide-indicator">
        {Array.from({ length: 3 }).map((_, index) => (
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

export default Slideshow;
