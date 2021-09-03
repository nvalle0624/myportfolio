import { Typography } from "@material-ui/core";
import React from "react";
import nickjump from "/Users/nick/MyPortfolio/portfolio_react_app/portfolio-app/src/components/work/static/nickguitar.jpg";
import nicksolo from "/Users/nick/MyPortfolio/portfolio_react_app/portfolio-app/src/components/work/static/nicksolo.jpg";

function AboutMe(props) {
  return (
    <React.Fragment>
      <div className="about-container">
        <div className="about-img-container">
          <img alt="me" src={nicksolo} className="aboutme-img"></img>
        </div>
        <div className="aboutme">
          <Typography paragraph>
            I love programming. I couldn't always say that, because I haven't always been a programmer. I'm also a
            passionately obsessive self-taught guitarist who grew up with a strict focus on academics. I originally
            shipped out to Northeastern University after high school to study philosophy and political science, only to
            pivot my studies towards my passion for music a few years in.
          </Typography>

          <Typography paragraph>
            Since then, I've had work in Miami and NYC as a session and live guitarist, sound technician, sound
            engineer, and studio assistant. Alongside that I also spent several years working at Apple retail stores
            both in customer service and technical support, and I eventually began working in hospitality as a bartender
            to balance income and flexibility. But as time passed, I knew I needed something to keep me mentally
            stimulated in a way that my current work outside of music just wasn't providing for me.
          </Typography>
          <Typography paragraph>
            So I decided to step back into my tech roots and I took a dive into the deep end of what I once thought
            would be far too much to take on. I didn’t know the first thing about code or programming and while I’ve
            always had a penchant for tech and learning things quickly, there remained a very strong intimidation
            factor.
          </Typography>
          <Typography paragraph>
            After taking the opportunity to dedicate time to earning web development certifications, I’ve learned that
            this is what I was meant to do all along, and yes, I love it. The logic, the planning, the system building,
            the creativity in problem solving, the critical thinking, the rush from breakthroughs especially after
            grinding for solutions; it’s exhilarating and I’m so excited for the journey that lies ahead.
          </Typography>
          <Typography paragraph>
            I’ve presented here, in the ‘works’ section of this website, some of the projects that paved the way for my
            career in web development. While I hope to gain a multitude of varying experiences and bodies of knowledge
            in web development and software engineering throughout my career, music is still and will always be a major
            part of my life and I look forward to someday blending those practices into a single project.
          </Typography>
        </div>
        <div className="about-img-container">
          <img alt="me" src={nickjump} className="aboutme-img"></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutMe;
