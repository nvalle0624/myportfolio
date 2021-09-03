import { Typography } from "@material-ui/core";
import React from "react";
import photo from "/Users/nick/MyPortfolio/portfolio_react_app/portfolio-app/src/components/work/static/nicholas_valle_headshot.jpg";

function Home(props) {
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
        <img alt="me" src={photo} style={{ width: "30%" }}></img>
      </div>
      <div className="intro-container">
        <Typography>
          <h1>Nicholas Valle</h1>
          <h3>Full-Stack Software Engineer</h3>
        </Typography>
        <div className="intro">
          <Typography paragraph>
            Hello, world! I'm a Full-Stack web developer looking to make an impact with your company, and push my skills
            to new levels. I love learning, using intericate systems to do cool, creative and useful things, and I'm
            eager to develop new products and technologies in web development and beyond.
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
