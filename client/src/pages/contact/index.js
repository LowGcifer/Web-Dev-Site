import Navbar from "../../components/Navbar";
import "./contact.css";
import Calendly from "../../components/Calendly";

function Contact() {
  return (
    <div className="default-color">
      <Navbar></Navbar>
      <div id="contact-body">
        <div id="contact-head-container">
          <h1 id="contact-header">Contact Me</h1>
        </div>

        <Calendly></Calendly>
      </div>
    </div>
  );
}

export default Contact;
