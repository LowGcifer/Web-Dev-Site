import React from "react";
import "./contactform.css";
import "../../style.css";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xbjbvkvr");
  if (state.succeeded) {
    return (
      <p className="contact-input-head">
        Thank you for your email! You will hear back from me soon!
      </p>
    );
  }
  return (
    <div className="contact-form-area">
      <form onSubmit={handleSubmit}>
        <label className="contact-input-head" htmlFor="email">
          Your Email Address
        </label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="contact-input-head">Message</label>
        <textarea className="input-area" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="submit-button-area">
          <button
            className="submit-button-style"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
