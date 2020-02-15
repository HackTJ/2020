import React from "react";

import "./index.css";

const hidden = text => <span style={{ visibility: "hidden" }}>{text}</span>;

const twitter = (
  <a
    className="social pe-so-twitter"
    target="_blank"
    rel="noopener noreferrer"
    href="https://twitter.com/HackTJOfficial"
  >
    {hidden("Twitter")}
  </a>
);
const facebook = (
  <a
    className="social pe-so-facebook empty"
    target="_blank"
    rel="noopener noreferrer"
    href="https://facebook.com/HackTJOfficial"
  >
    {hidden("Facebook")}
  </a>
);
const instagram = (
  <a
    className="social pe-so-instagram empty"
    target="_blank"
    rel="noopener noreferrer"
    href="https://instagram.com/hacktjofficial"
  >
    {hidden("Instagram")}
  </a>
);

const SocialLinks = () => (
  <div className="social-links">
    {twitter}
    {facebook}
    {instagram}
  </div>
);

export default SocialLinks;