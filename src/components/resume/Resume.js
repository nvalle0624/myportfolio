import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumePDF from "./nicholas_valle_resume.pdf";

function Resume() {
  return (
    <React.Fragment>
      <h1>Resumé</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Document file={resumePDF}>
          <div style={{ border: "1px solid black" }}>
            <Page pageNumber={1} />
          </div>
          <div style={{ border: "1px solid black" }}>
            <Page pageNumber={2} />
          </div>
        </Document>
      </div>
    </React.Fragment>
  );
}

export default Resume;
