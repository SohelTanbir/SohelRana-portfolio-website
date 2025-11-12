import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { personalInfo } from "../../Data/Data";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="socials">
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
        aria-label="github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>

      <a
        href={personalInfo.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href={personalInfo.twitter}
        target="_blank"
        rel="noreferrer"
        aria-label="twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
}
