import FaqIcon from "../../assets/material-icon/FaqIcon.jsx";
import "./FAQ.css";

function Faq() {
  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-heading">
        <FaqIcon />
        Frequently Asked Questions
      </h2>
      <div className="faq-list">
        <div className="faq-item">
          <h4 className="faq-question">
            1. Why not just store it in Telegram like we normally do?
          </h4>
          <p className="faq-answer">
            Telegram groups are useful, but they get messy fast. DDU Stack
            organizes files by course and department — so you can find what you
            need instantly without endless scrolling.
          </p>
        </div>

        <div className="faq-item">
          <h4 className="faq-question">
            2. Why not just keep our files zipped and use when needed most?
          </h4>
          <p className="faq-answer">
            Zipped folders are fine, but they're stored locally — which means
            they can get lost if you change phones or accidentally delete them.
            DDU Stack keeps your course files safely online, so you can preview
            and download exactly what you need — no unzipping, no guessing, and
            no risk of losing your materials.
          </p>
        </div>

        <div className="faq-item">
          <h4 className="faq-question">
            3. Why are some files not previewing?
          </h4>
          <p className="faq-answer">
            Only file types your browser supports (like PDFs) can be previewed
            directly. Other formats like PPT or ZIP must be downloaded and
            opened using external apps. Also, some native in-app browsers like
            Telegram’s don’t support previews at all — even for PDFs. For the
            best experience, open DDU Stack in a full browser like Chrome,
            Safari or others.
          </p>
        </div>

        <div className="faq-item">
          <h4 className="faq-question">4. What is the purpose of this site?</h4>
          <p className="faq-answer">
            DDU Stack is built to give students fast, organized, and free access
            to course materials — made by students, for students.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Faq;
