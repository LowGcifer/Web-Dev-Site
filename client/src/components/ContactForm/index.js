import React from "react";
import "./contactform.css";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xbjbvkvr");
  if (state.succeeded) {
    return <p>Thank you for your email! You will hear back from me soon!</p>;
  }
  return (
    <div className="contact-form-area">
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/https://formspree.io/f/xbjbvkvr"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label for="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />
          <label for="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
          />
          <label for="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;

{
  /* <form onSubmit={handleSubmit}>
      <label htmlFor="email">Your Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form> */
}
