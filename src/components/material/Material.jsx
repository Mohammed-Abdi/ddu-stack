import "./Material.css";
import Doc from "../../assets/file-icon/Doc.jsx";
import Pdf from "../../assets/file-icon/Pdf.jsx";
import Pptx from "../../assets/file-icon/Pptx.jsx";
import Xml from "../../assets/file-icon/Xml.jsx";

function Material({ code, name, topic, chapter, format }) {
  let Icon;
  if (format.toLowerCase() === "pdf") {
    Icon = Pdf;
  } else if (format.toLowerCase() === "pptx") {
    Icon = Pptx;
  } else if (format.toLowerCase() === "xml") {
    Icon = Xml;
  } else if (format.toLowerCase() === "doc") {
    Icon = Doc;
  } else {
    return;
  }
  return (
    <div className="material">
      <div className="material-icon">{Icon}</div>
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
