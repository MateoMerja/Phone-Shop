import React from "react";
import BannerProps from "./BannerProps";
import about from "./images/img2.jpg";
const About = () => {
  return (
    <div>
      <BannerProps image={about} title="About page info" />
    </div>
  );
};

export default About;
