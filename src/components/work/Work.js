// import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { workCards } from "./WorkCards";
// import ToggleButton from "@material-ui/lab/ToggleButton";
// import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

function Work(props) {
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedWork, setSelectedWork] = useState(workCards);
  let newSelectedWork = [];

  const handleSelectTech = (event) => {
    let tech = event.currentTarget.innerHTML;
    setSelectedTech(selectedTech);
    setSelectedWork(selectedWork);

    if (!selectedTech.includes(tech)) {
      selectedTech.push(tech);
      setSelectedTech(selectedTech);
    } else {
      selectedTech.splice(selectedTech.indexOf(tech), 1);
      setSelectedTech(selectedTech);
    }

    if (selectedTech.length > 0) {
      newSelectedWork = [];
      setSelectedWork(newSelectedWork);
      selectedTech.forEach((selection) => {
        workCards.forEach((item) => {
          let tags = item.props.tags;
          if (selectedTech.some((tag) => tags.includes(tag))) {
            if (!newSelectedWork.includes(item)) {
              newSelectedWork.push(item);
              setSelectedWork(newSelectedWork);
            }
          } else {
            if (newSelectedWork.includes(item)) {
              newSelectedWork.splice(item, 1);
              setSelectedTech(newSelectedWork);
            }
          }
        });
      });
    } else if (selectedTech.length === 0) {
      setSelectedWork(workCards);
    }
    handleChange();
  };
  async function handleChange() {
    await setSelectedTech(selectedTech);
    let tagSpan = Array.from(document.getElementsByClassName("tech-span"));
    let posters = Array.from(document.getElementsByClassName("poster"));
    let techButtons = Array.from(document.getElementsByClassName("tech-button"));
    tagSpan.forEach((i) => {
      if (selectedTech.includes(i.innerHTML)) {
        i.className = i.className.replace(" selected", "");
        i.className += " selected";
      } else {
        i.className = i.className.replace(" selected", "");
      }
    });
    posters.forEach((i) => {
      if (selectedTech.includes(i.innerHTML)) {
        i.className = i.className.replace(" selected", "");
        i.className += " selected";
      } else {
        i.className = i.className.replace(" selected", "");
      }
    });
    techButtons.forEach((i) => {
      if (selectedTech.includes(i.innerHTML)) {
        i.className = i.className.replace(" selected", "");
        i.className += " selected";
      } else {
        i.className = i.className.replace(" selected", "");
      }
    });
  }
  console.log(selectedTech);

  let techButtons = [
    "Python",
    "Django",
    "JavaScript",
    "React",
    "Redux",
    "Node.js",
    "Express.js",
    "SQL",
    "NoSql",
    "Postgresql",
    "MongoDB",
    "Bootstrap",
    "CSS",
    "HTML",
    "API's",
    "RESTframework",
  ];

  return (
    <React.Fragment>
      <h1>Projects</h1>

      <div className="tech-selection">
        {/* <ToggleButtonGroup className="tech-selection" value={formats} onChange={handleFormat}> */}
        {techButtons.map((tech) => (
          <button className="tech-button" key={tech} value={tech} onClick={handleSelectTech}>
            {tech}
          </button>
        ))}
        {/* </ToggleButtonGroup> */}
      </div>
      <br></br>
      <div className="poster-selection">
        Poster Selection
        {techButtons.map((tech) => (
          <div className="poster" key={tech} value={tech} onClick={handleSelectTech}>
            {tech}
          </div>
        ))}
      </div>

      <div className="selected-work" style={{ display: "flex", margin: "30px" }}>
        {selectedWork.map((card) => (
          <div className="project-card" style={{ padding: "10px" }} key={card.props.name}>
            {card}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default Work;
