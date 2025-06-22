import Books from "../../assets/file-icon/Books.jsx";
import Database from "../../assets/file-icon/Database.jsx";
import "./Course.css";

function Course({ name, code, total, setIsOpen }) {
  return (
    <div className="course" onClick={() => setIsOpen(code)}>
      <Database />
      <div className="course-detail">
        <span className="name">{name}</span>
        <span className="code">{code}</span>
      </div>
      <span className="total">
        <Books className="icon" />
        {`${total} files`}
      </span>
    </div>
  );
}

export default Course;
