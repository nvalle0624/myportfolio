import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { workCards } from "./WorkCards";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

function Work(props) {
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedWork, setSelectedWork] = useState(workCards);
  let newSelectedWork = [];

  const [formats, setFormats] = React.useState(() => []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleSelectTech = (event) => {
    let tech = event.currentTarget.innerHTML;
    let techButton = event.currentTarget;
    if (selectedTech.includes(tech) === false) {
      techButton.className += " selected";
      selectedTech.push(event.currentTarget.innerHTML);
      setSelectedTech(selectedTech);
    } else {
      techButton.className = techButton.className.replace(" selected", "");
      selectedTech.splice(selectedTech.indexOf(tech), 1);
      setSelectedTech(selectedTech);
    }
    if (selectedTech.length === 1) {
      workCards.forEach((item) => {
        let tags = item.props.tags;
        if (selectedTech.some((tag) => tags.indexOf(tag) >= 0)) {
          newSelectedWork.push(item);
          setSelectedWork(newSelectedWork);
        } else {
          setSelectedWork(newSelectedWork);
        }
      });
    } else if (selectedTech.length > 1) {
      newSelectedWork = [];
      setSelectedWork(newSelectedWork);
      workCards.forEach((item) => {
        let tags = item.props.tags;
        if (selectedTech.every((tag) => tags.includes(tag))) {
          if (newSelectedWork.includes(item) === false) {
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
    } else if (selectedTech.length === 0) {
      setSelectedWork(workCards);
    }
    console.log(selectedTech);
  };

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
        <ToggleButtonGroup className="tech-selection" value={formats} onChange={handleFormat}>
          {techButtons.map((tech) => (
            <ToggleButton className="tech-button" key={tech} value={tech} onClick={handleSelectTech}>
              {tech}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
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
