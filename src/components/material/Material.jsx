import "./Material.css";
import Doc from "../../assets/file-icon/Doc.jsx";
import Pdf from "../../assets/file-icon/Pdf.jsx";
import Pptx from "../../assets/file-icon/Pptx.jsx";
import Xml from "../../assets/file-icon/Xml.jsx";
import Download from "../../assets/material-icon/Download.jsx";
import Read from "../../assets/material-icon/Read.jsx";
import More from "../../assets/material-icon/More.jsx";
import Close from "../../assets/material-icon/Close.jsx";
import { useState } from "react";
import Properties from "../../assets/material-icon/Properties.jsx";

function Material({ code, name, topic, chapter, format, path, size, unit }) {
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
  function handleDetail() {
    if (miniWindowIsOpen) setMiniWindowIsOpen((value) => !value);
    if (downloadWindowIsOpen) setDownloadWindowIsOpen((value) => !value);
    if (detailWindowIsOpen) setDetailWindowIsOpen((value) => !value);
  }
  return (
    <>
      <div className="material" onClick={handleDetail}>
        <div className="material-info-wrapper">
          <div className="material-icon">
            {format === "pdf" ? (
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
            <span className="chapter">{`Chapter ${chapter}`}</span>
            <span className="topic">{topic}</span>
            <span className="name">{name}</span>
            <div className="more hover-over" onClick={handleMiniWindowIsOpen}>
              <More />
            </div>
          </div>
        </div>
        <div className={`buttons ${!miniWindowIsOpen ? "closed" : ""}`}>
          {format === "pdf" && (
            <a href={path} target="_blank" className="button">
              <Read /> Preview
            </a>
          )}
          <div className="button" onClick={handleDownloadWindow}>
            <Download />
            Download
          </div>
          <div className="button" onClick={handleDetailWindowIsOpen}>
            <Properties />
            Properties
          </div>
        </div>
      </div>
      <div
        className={`material-details ${!detailWindowIsOpen ? "closed" : ""}`}
        onClick={handleDetail}
      >
        <Close className="close-icon hover-over" />
        <span className="title">Document Properties</span>
        <span>Course: {name}</span>
        <span>Chapter: {chapter}</span>
        <span>Topic: {topic}</span>
        <span>Code: {code}</span>
        <span>Type: {format}</span>
        <span>
          Size: {size} {unit}
        </span>
      </div>
      <div
        className={`download-window ${!downloadWindowIsOpen ? "closed" : ""}`}
        onClick={handleDetail}
      >
        <span className="notice">Download {size + " " + unit} ?</span>
        <div className="decisions">
          <div className="cancel-btn">Cancel</div>
          <a href={path} download>
            <div className="download-btn">Download</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Material;
