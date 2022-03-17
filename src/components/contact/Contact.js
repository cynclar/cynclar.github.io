import React from "react";
import TypeAnimation from "react-type-animation";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        <div className="text-anim-wrapper">
          <TypeAnimation
            cursor={false}
            sequence={["Have a chat with me!", 1500, ""]}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>

        <div className="social-media">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/cynthia-clarissa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                In
              </a>
            </li>
            <li>
              <a
                href="mailto:cynthia.clarr@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Em
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cynthiaclarisaa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ig
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
