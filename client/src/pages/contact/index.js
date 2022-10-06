import Navbar from "../../components/Navbar";
import "./contact.css";
import Calendly from "../../components/Calendly";

function Contact() {
  return (
    <div className="default-color">
      <Navbar></Navbar>
      <div id="contact-body">
        <div id="contact-head-container">
          <p id="contact-header">Contact Me</p>
        </div>

        <Calendly></Calendly>
      </div>
    </div>
  );
}

export default Contact;
