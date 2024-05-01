"use client";

import { useRef } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import "./styles.css";

export default function ContactUs() {
  const recaptchaRef = useRef(null);

  return (
    <div className="contactUs">
      <div className="contactUs__cover">
        <img src="./images/contactus-cover.png" alt="contact us" />
      </div>

      <form className="contactUs__form flex ">
        <div className="contactUs__form__left flex flex-wrap">
          <div className="flex flex-wrap">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="email" placeholder="Email name" required />
            <input type="phone" placeholder="Phone number" required />
          </div>

          <div className="flex flex-column flex-align-start m-t-10 m-b-10">
            <ReCAPTCHA
              sitekey="6LdQ_skpAAAAALQale3UsTL1ttJ28kS5C1e6zfMy"
              ref={recaptchaRef}
              onChange={(e) => handleRecaptchaChange(e)}
            />
            <button
              type="submit"
              className="flex flex-align-center weight-600 m-t-30 m-b-10"
            >
              <div>Submmit</div>
              <img
                src="./images/arrow-right.svg"
                alt="arrow-right"
                className="m-l-5"
              />
            </button>
          </div>
        </div>
        <div className="contactUs__form__right">
          <textarea
            placeholder="Your message"
            className="m-b-10 contactUs__form__right__message"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
