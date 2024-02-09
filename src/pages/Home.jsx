import "../css/home.css";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { VisionMission } from "../components/VisionMission";
import Slideshow from "../components/Slideshow";
import { NewsBg } from "../components/News-bg";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="homepage-wrapper">
      <Slideshow className="home-slides" />
      <div className="vision-mission-wrapper">
        <VisionMission className="vision-mission" />
      </div>
      <div className="about-container">
        <About className="home-about" />
      </div>
      <div className="news-home">
        <NewsBg />
        <div className="d-flex justify-content-center">
          <button className="btn-dark-bg news-home-btn" onClick={() => navigate('/news')}>
            Keep up with the latest events <BsChevronRight />
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};
