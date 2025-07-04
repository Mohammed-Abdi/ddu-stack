import "./Material.css";
import Doc from "../../assets/file-icon/Doc.jsx";
import Pdf from "../../assets/file-icon/Pdf.jsx";
import Pptx from "../../assets/file-icon/Pptx.jsx";
import Xml from "../../assets/file-icon/Xml.jsx";
import More from "../../assets/material-icon/More.jsx";
import Close from "../../assets/material-icon/Close.jsx";
import Project from "../../assets/file-icon/Project.jsx";
import Workbook from "../../assets/file-icon/Workbook.jsx";
import LabEx from "../../assets/file-icon/LabExercise.jsx";
import { useState } from "react";

function Material({
  code,
  name,
  topic,
  chapter,
  format,
  path,
  size,
  unit,
  isLabExercise,
  isAssignment,
  isWorkBook,
}) {
  const [miniWindowIsOpen, setMiniWindowIsOpen] = useState(false);
  const [downloadWindowIsOpen, setDownloadWindowIsOpen] = useState(false);
  const [detailWindowIsOpen, setDetailWindowIsOpen] = useState(false);
  function handleDownloadWindow() {
    setDownloadWindowIsOpen((value) => !value);
  }
  function handleDetailWindowIsOpen() {
    setDetailWindowIsOpen((value) => !value);
  }
  function handleMiniWindowIsOpen() {
    setMiniWindowIsOpen((value) => !value);
  }
  function handleMost() {
    setMiniWindowIsOpen((value) => !value);
    if (downloadWindowIsOpen) setDownloadWindowIsOpen((value) => !value);
    if (detailWindowIsOpen) setDetailWindowIsOpen((value) => !value);
  }
  return (
    <>
      <div className="material" onClick={handleMost}>
        <div className="material-info-wrapper">
          <div className="material-icon">
            {isLabExercise ? (
              <LabEx />
            ) : isAssignment ? (
              <Project />
            ) : isWorkBook ? (
              <Workbook className="material-icon" />
            ) : format === "pdf" ? (
              <Pdf />
            ) : format === "pptx" ? (
              <Pptx />
            ) : format === "xml" ? (
              <Xml />
            ) : (
              <Doc />
            )}
          </div>
          <div className="material-overview">
            <span className="chapter">
              {isAssignment
                ? "Assignment"
                : isLabExercise
                ? "Lab Exercise"
                : isWorkBook
                ? "WorkBook"
                : `Chapter ${chapter}`}
            </span>
            <span className="topic">{topic}</span>
            <span className="name">{name}</span>
            <div className="more hover-over">
              <More />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`buttons ${!miniWindowIsOpen ? "closed" : ""}`}
        onClick={handleMiniWindowIsOpen}
      >
        <div className="material-title">
          {isLabExercise ? (
            <LabEx className="material-icon" />
          ) : isAssignment ? (
            <Project className="material-icon" />
          ) : isWorkBook ? (
            <Workbook className="material-icon" />
          ) : format === "pdf" ? (
            <Pdf className="material-icon" />
          ) : format === "pptx" ? (
            <Pptx className="material-icon" />
          ) : format === "xml" ? (
            <Xml className="material-icon" />
          ) : (
            <Doc className="material-icon" />
          )}
          <span className="title">{topic}</span>
        </div>
        <div className="button download" onClick={handleDownloadWindow}>
          Download
        </div>
        {format === "pdf" && (
          <a href={path} target="_blank" className="button">
            Open in browser
          </a>
        )}

        <div className="button" onClick={handleDetailWindowIsOpen}>
          Properties
        </div>
        <div className="close-icon-for-mini-window hover-over">
          <Close />
        </div>
      </div>
      <div
        className={`material-details ${!detailWindowIsOpen ? "closed" : ""}`}
        onClick={handleMost}
      >
        <Close className="close-icon hover-over" />
        <span className="title">Document Properties</span>
        <span>Course: {name}</span>
        <span>{chapter > 0 ? `Chapter ${chapter}` : "Assignment"}</span>
        <span>Topic: {topic}</span>
        <span>Code: {code}</span>
        <span>Type: {format}</span>
        <span>
          Size: {size} {unit}
        </span>
      </div>
      <div
        className={`download-window ${!downloadWindowIsOpen ? "closed" : ""}`}
      >
        <span className="notice">Download {size + " " + unit} ?</span>
        <div className="decisions">
          <div className="cancel-btn" onClick={handleMost}>
            Cancel
          </div>
          <a href={path} download onClick={handleDownloadWindow}>
            <div className="download-btn">Download</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Material;
