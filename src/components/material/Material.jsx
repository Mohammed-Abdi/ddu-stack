import "./Material.css";
import Doc from "../../assets/file-icon/Doc.jsx";
import Pdf from "../../assets/file-icon/Pdf.jsx";
import Pptx from "../../assets/file-icon/Pptx.jsx";
import Xml from "../../assets/file-icon/Xml.jsx";
import Download from "../../assets/material-icon/Download.jsx";
import Read from "../../assets/material-icon/Read.jsx";
import More from "../../assets/material-icon/More.jsx";
import { useState } from "react";

function Material({ code, name, topic, chapter, format, path, size, unit }) {
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  function handleDetail() {
    setDetailIsOpen((value) => !value);
  }
  return (
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
          <More className="more hover-over" />
        </div>
      </div>
      <div className={`material-detail ${!detailIsOpen ? "closed" : ""}`}>
        <div className="material-details">
          <span className="code">{`course code: ${code}`}</span>
          <span className="size">{`file size: ${size} ${unit}`}</span>
        </div>
        <div className="buttons">
          {format === "pdf" && (
            <a href={path} target="_blank">
              <div className="button">
                <Read />
                Read
              </div>
            </a>
          )}
          <a href={path} download>
            <div className="button">
              <Download />
              Download
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Material;
