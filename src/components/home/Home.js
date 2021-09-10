import { Typography } from "@material-ui/core";
import React from "react";
import photo from "/Users/nick/MyPortfolio/portfolio_react_app/portfolio-app/src/components/work/static/nicholas_valle_headshot.jpg";

function Home(props) {
  return (
    <React.Fragment>
      <div className="homepage">
        <div className="headshot-container">
          <img alt="me" src={photo} style={{ width: "30%" }} className="headshot"></img>
        </div>
        <div className="intro-container">
          <div className="intro-head">
            <Typography variant="h1" className="name">
              Nicholas Valle
            </Typography>
            <Typography variant="h2" className="role">
              Full-Stack Software Engineer
            </Typography>
          </div>
          <div className="intro">
            <Typography variant="h4" className="intro-line">
              I'm a developer looking to make an impact with your company, and push my skills to new levels.
            </Typography>
            <Typography variant="h4" className="intro-line">
              I enjoy building and using intricate systems to do cool, creative and useful things, so I'm eager to take
              part in developing new products and tools.
            </Typography>
          </div>
        </div>
      </div>
      <div className="background1"></div>
      <div className="background2"></div>
    </React.Fragment>
  );
}

export default Home;
