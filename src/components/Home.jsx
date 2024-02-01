import "../css/home.css";
import { Footer } from "./Footer";
import { About } from "./About";
import { VisionMission } from "./VisionMission";
import Slideshow from "./Slideshow";
import { NewsBg } from "./News-bg";

export const Home = () => {
  return (
    <section className="homepage-wrapper">
      <Slideshow className="home-slides" />
      <div className="vision-mission-wrapper">
        <VisionMission className="vision-mission" />
      </div>
      <div className="about-container">
        <About className="home-about" />
      </div>
      <NewsBg />
      <Footer />
    </section>
  );
};
