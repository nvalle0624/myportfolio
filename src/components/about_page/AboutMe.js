import { Typography } from "@material-ui/core";
import React from "react";
import nicksolo from "/Users/nick/MyPortfolio/portfolio_react_app/portfolio-app/src/components/work/static/nicksolo.jpg";

function AboutMe(props) {
  return (
    <React.Fragment>
      <div className="about-container">
        <div className="aboutme">
          <Typography variant="h5" paragraph className="aboutme-line">
            Graudate of Kenzie Academy's Front-End and Full-Stack Software Engineer certificate programs
          </Typography>
          <Typography variant="h5" paragraph className="aboutme-line">
            Focus on web development, but interested in general software development and continued learning
          </Typography>
          <Typography variant="h5" paragraph className="aboutme-line">
            Self-learner and team player, exhilarated by problem-solving and creative technical achievements
          </Typography>
          <Typography variant="h5" paragraph className="aboutme-line">
            New York native with a background in music as a session musician and sound technician
          </Typography>
          <Typography variant="h5" paragraph className="aboutme-line">
            Aiming to merge passions professionally with future projects
          </Typography>
        </div>
        <div className="about-img-container-1">
          <img alt="me" src={nicksolo} className="aboutme-img-1"></img>
        </div>
      </div>
      <div className="background1"></div>
      <div className="background2"></div>
    </React.Fragment>
  );
}

export default AboutMe;
