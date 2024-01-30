import '../css/contact-popup.css'

export const ContactPopup = () => {
  return (
    <div className="contact-popup w-25">
      <form action="">
        <input type="text" className="form-control" name="fullName" placeholder="* Name" />
        <input type="email" className="form-control" name="email" placeholder="* Email" />
       <textarea name="message" className="form-control" placeholder="* Message" col="5" rows="10"></textarea>
      </form>
    </div>
  );
};
