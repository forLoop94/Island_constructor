import "../css/home.css";
import { Footer } from "./Footer";
import { About } from "./About";
import { VisionMission } from "./VisionMission";
import Slideshow from "./Slideshow";
import { NewsBg } from "./News-bg";
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
