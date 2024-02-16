import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CloseChat } from "./CloseChat";
import { ContactPopup } from "./ContactPopup";
import { LetsChat } from "./LetsChat";
import { NavPanel } from "./NavPanel";

const Root = () => {
  const [showForm, setShowForm] = useState(false);

  const hideForm = {
    display: showForm ? "none" : "block",
  };

  const hideClose = {
    display: showForm ? "block" : "none",
  };

  return (
    <div id="root">
      <NavPanel />
      <div
        className="chat-btn-container"
        style={hideForm}
        onClick={() => setShowForm(!showForm)}
      >
        <LetsChat />
      </div>
      <div
        className="chat-btn-container"
        style={hideClose}
        onClick={() => setShowForm(!showForm)}
      >
        <CloseChat />
      </div>
      <div id="pages-content">
        <Outlet />
      </div>
      <div className="root-contact-form">{showForm && <ContactPopup />}</div>
    </div>
  );
};

export default Root;
