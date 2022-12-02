import Navbar from "../../components/Navbar";
import "./contact.css";
import Calendly from "../../components/Calendly";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <div className="default-color">
      <Navbar></Navbar>
      <div id="contact-body">
        <div id="contact-head-container">
          <h1 id="contact-header">Contact Me</h1>
        </div>

        <div id="contact-text-area">
          <p className="contact-text">
            If you are interested in working with me, please schedule <br></br>{" "}
            a Zoom call with me using the calendar below. <br></br> If timezones
            or some other scheduling conflict prevent you <br></br> from
            scheduling a Zoom call with me, then please email me <br></br>
            using the contact form below. Thank you!
          </p>
        </div>
        <Calendly></Calendly>
        <div className="contact-form-area">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default Contact;
