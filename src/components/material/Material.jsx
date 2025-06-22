import "./Material.css";
import Doc from "../../assets/file-icon/Doc.jsx";
import Pdf from "../../assets/file-icon/Pdf.jsx";
import Pptx from "../../assets/file-icon/Pptx.jsx";
import Xml from "../../assets/file-icon/Xml.jsx";

function Material({ code, name, topic, chapter, format }) {
  console.log("format", format);
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
        <h2>{topic}</h2>
        <h3>{`Chapter ${chapter}`}</h3>
        <h4>{name}</h4>
        <h5>{code}</h5>
      </div>
      <div className="material-buttons"></div>
    </div>
  );
}

export default Material;
