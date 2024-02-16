import { BsSend } from "react-icons/bs";
import "../css/contact-popup.css";
import { toast } from "react-toastify";

export const ContactPopup = () => {
  return (
    <div className="contact-popup">
      <div className="upper-bg">
        <h2 className="text-center text-white">Contact Us</h2>
      </div>
      <div className="lower-bg"></div>
      <div className="form-container d-flex justify-content-center align-items-center">
        <form
          action="https://formspree.io/f/xknaqwwd"
          method="post"
          className="popup-contact-form d-flex flex-column gap-3"
        >
          <input
            type="text"
            className="form-control"
            name="fullName"
            placeholder="* Name"
            required
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="* Email"
            required
          />
          <textarea
            name="message"
            className="form-control"
            placeholder="* Message"
            rows="5"
            required
          ></textarea>
          <div className="about-btn-container d-flex justify-content-center mt-1">
          <button type="submit" className="btn-dark-bg" onClick={() => toast.success("Submission done successfully")}>
            Submit <BsSend className="ms-3" />
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};
