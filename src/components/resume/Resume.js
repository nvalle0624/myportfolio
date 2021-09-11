import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumePDF from "./nicholas_valle_resume.pdf";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Resume() {
  // from: https://stackoverflow.com/questions/62423397/zoomin-zoomout-buttons-doesnt-work-with-react-pdf
  const [scale, setScale] = useState(1);
  const MOBILE_WIDTH = 768;

  // Adapt the size of the scale according to the screen
  function resize() {
    if (window.innerWidth <= MOBILE_WIDTH) {
      setScale(0.75);
    }
  }
  useEffect(() => {
    resize();
  });

  function zoomIn() {
    setScale(scale + 0.2);
  }

  function zoomOut() {
    setScale(scale - 0.2);
  }

  return (
    <React.Fragment>
      <div className="resume">
        <a
          style={{ textDecoration: "none" }}
          href="https://drive.google.com/file/d/1Nt8N0651eqzo9NMm-0ZlV51YBRbXIngJ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button style={{ margin: "10px", backgroundColor: "black", color: "white" }}>Open in Google Drive</Button>
        </a>
        <div className="zoom">
          <Button onClick={zoomIn} style={{ margin: "10px", backgroundColor: "black", color: "white" }}>
            <AddIcon />
          </Button>
          <Button onClick={zoomOut} style={{ margin: "10px", backgroundColor: "black", color: "white" }}>
            <RemoveIcon />
          </Button>
        </div>
        <Document file="./nicholas_valle_resume.pdf" className="resume-container">
          <div style={{ border: "1px solid black" }}>
            <Page pageNumber={1} scale={scale} />
          </div>
          <div style={{ border: "1px solid black" }}>
            <Page pageNumber={2} scale={scale} />
          </div>
        </Document>
      </div>
      <div className="background1"></div>
      <div className="background2"></div>
    </React.Fragment>
  );
}

export default Resume;
