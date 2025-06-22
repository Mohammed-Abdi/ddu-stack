import "./Material.css";
import Doc from "../../assets/file-icon/Doc.jsx";
import Pdf from "../../assets/file-icon/Pdf.jsx";
import Pptx from "../../assets/file-icon/Pptx.jsx";
import Xml from "../../assets/file-icon/Xml.jsx";

function Material({ code, name, topic, chapter, format }) {
  return (
    <div className="material">
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
      <div className="material-detail">
        <span className="chapter">{`Chapter ${chapter}`}</span>
        <span className="topic">{topic}</span>
        <span className="name">{name}</span>
        <span className="code">{code}</span>
      </div>
      <div className="material-buttons"></div>
    </div>
  );
}

export default Material;
