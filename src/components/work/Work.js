import React, { useState } from "react";
import { workCards } from "./WorkCards";
import drums from "./static/audio/Bluebird.mp3";
import synth1 from "./static/audio/70s Choral Riff Layers.mp3";
import synth2 from "./static/audio/80s Pop Synthesizer 01.mp3";
import guitar from "./static/audio/Longing Guitar.mp3";
import guitar2 from "./static/audio/Echo Loop Guitar.mp3";
import piano from "./static/audio/Cali Vibes Piano.mp3";
import sax from "./static/audio/Night Walk Sax.mp3";
import guitar3 from "./static/audio/Rolling Disco Guitar.mp3";
import maracas from "./static/audio/Big Maracas 05.mp3";
import tambourine from "./static/audio/Tambourine 01.mp3";
import fireplace from "./static/audio/Fireplace All.mp3";
import brookyln from "./static/audio/Brooklyn Style Vibes 02.mp3";

const audio1 = new Audio(drums);
const audio2 = new Audio(synth1);
const audios = [
  { audio: drums, name: "Python" },
  { audio: synth1, name: "JavaScript" },
  { audio: synth2, name: "Django" },
  { audio: guitar, name: "React" },
  { audio: guitar2, name: "Redux" },
  { audio: piano, name: "Node.js" },
  { audio: sax, name: "Express.js" },
  { audio: guitar3, name: "SQL" },
  { audio: maracas, name: "NoSql" },
  { audio: tambourine, name: "Postgresql" },
  { audio: fireplace, name: "MongoDB" },
  { audio: brookyln, name: "Bootstrap" },
];
export const allAudio = [
  { audio: audio1, name: "Python" },
  { audio: audio2, name: "JavaScript" },
];
function Work(props) {
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedWork, setSelectedWork] = useState(workCards);

  let newSelectedWork = [];
  let audioHTML = "";
  let selectedAudio = [];

  for (let a of selectedTech) {
    audioHTML = document.getElementById("audio-" + a);
    console.log(audioHTML);
    audioHTML.muted = false;
    selectedAudio.push(a);
  }

  const handleSelectTech = (event) => {
    let tech = event.currentTarget.innerHTML;
    setSelectedTech(selectedTech);
    setSelectedWork(selectedWork);

    for (let a of selectedTech) {
      audioHTML = document.getElementById("audio-" + a);
      console.log(audioHTML);
      audioHTML.muted = true;
      selectedAudio.push(a);
    }

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
        {techButtons.map((tech) => (
          <button className="tech-button" key={tech} value={tech} onClick={handleSelectTech}>
            {tech}
          </button>
        ))}
      </div>
      <br></br>
      <div className="poster-selection">
        Poster Selection
        {techButtons.map((tech) => (
          <div className="poster" id={tech} key={tech} value={tech} onClick={handleSelectTech}>
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

      {audios.map((item) => (
        <audio autoplay="true" loop src={item.audio} id={"audio-" + item.name} muted></audio>
      ))}
    </React.Fragment>
  );
}
export default Work;
