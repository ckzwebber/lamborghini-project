import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="background-image-contact"></div>
      <h1>CONTACT OFFICIAL LAMBORGHINI</h1>
      <div className="contact-info">
        <button>
          <a
            target="_blank"
            href="https://www.lamborghini.com/en-en"
            class="btn2"
          >
            <span class="spn2">WEBSITE</span>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw"
            class="btn2"
          >
            <span class="spn2">YOUTUBE</span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/automobili-lamborghini-s-p-a-/"
            class="btn2"
          >
            <span class="spn2">LINKEDIN</span>
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@lamborghini?lang=en"
            class="btn2"
          >
            <span class="spn2">TIKTOK</span>
          </a>
        </button>
        <p className="contact-me">
          If you want to talk to whoever created this site,{" "}
          <a href="https://webberportfolio.netlify.app/" target="_blank">
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
