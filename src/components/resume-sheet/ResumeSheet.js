import ResumeSheetStyle from "./resume-sheet.module.scss";

const ResumeSheet = () => {
  return (
    <div className={ResumeSheetStyle.sheet}>
      <div className={ResumeSheetStyle.personalInfo}>
        <div className="name" style={{ fontSize: "14pt" }}>
          MICHAEL QUAYE
        </div>
        <article>Postal Address</article>
      </div>
      <div className="education">
        <h1>EDUCATION</h1>
        <hr />
      </div>
      <div className="achievements">
        <h1>ACHIEVEMENTS</h1>
        <hr />
      </div>
      <div className="work-experience">
        <h1>WORK EXPERIENCE</h1>
        <hr />
      </div>
      <div className="projects-research">
        <h1>PROJECTS & RESEARCH</h1>
        <hr />
      </div>
      <div className="co-curricular">
        <h1>CO-CURRICULAR</h1>
        <hr />
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
        <hr />
      </div>
    </div>
  );
};

export default ResumeSheet;
