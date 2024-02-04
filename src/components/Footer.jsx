import "../css/footer.css";
import "../css/about.css";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="skewed-footer"></div>
      <div className="main-footer">
        <div className="footer-content-wrapper">
          <div className="footer-note">
            <h4>Explanatory Memorandum</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A earum
              ducimus consequuntur nesciunt corrupti quis ea quam cumque, iusto
              reprehenderit cupiditate enim delectus temporibus officiis?
            </p>
          </div>
          <div className="footer-image-container">
            <img
              src="https://images.pexels.com/photos/3104719/pexels-photo-3104719.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="CEO"
              className="footer-photo"
            />
          </div>
          <div className="footer-right d-flex flex-column gap-3">
            <h4>Contact Us</h4>
            <p className="footer-address">
              <FaLocationArrow className="footer-aux-icons" />
              Address: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Est, minus.
            </p>
            <div className="thematic-break"></div>
            <div className="mt-3">
              <p>
                <FaPhoneAlt className="footer-aux-icons" />
                Phone: (+234) 816 518 3852
              </p>
              <p>
                <FaEnvelope className="footer-aux-icons" />
                Email: example@gmail.com
              </p>
              <p>
                <FaGlobe className="footer-aux-icons" />
                Website: example.construction.org
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 footer-bottom d-flex justify-content-between">
          <p>2024 | Company Name</p>
          <div className="footer-socials d-flex w-25 gap-2 justify-content-end">
            <a className="text-white" target="_blank" href="#">
              <FaFacebookF />
            </a>
            <a className="text-white" target="_blank" href="">
              <FaLinkedinIn />
            </a>
            <a className="text-white" target="_blank" href="">
              <FaTwitter />
            </a>
            <a className="text-white" target="_blank" href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
