import OneLineData from "components/resume-sheet-components/one-line-data/OneLineData";
import BoldOneLineData from "components/resume-sheet-components/one-line-data/BoldOneLineData";
import ResumeSheetStyle from "./resume-sheet.module.scss";
import MultiLineData from "components/resume-sheet-components/multi-line-data/MultiLineData";
import ResumeCategory from "components/resume-category/ResumeCategory";

import { useSelector, useDispatch } from "react-redux";
import BulletedLineData from "components/resume-sheet-components/bulleted-line-data/BulletedLineData";

const ResumeSheet = (props) => {
  if (window.location.pathname === "/print") {
    setTimeout(() => window.print(), 1000);
  }

  const personalInfo = useSelector((state) => state.personalInfo);

  return (
    <div className={ResumeSheetStyle.sheet}>
      <div className={ResumeSheetStyle.personalInfo}>
        <center>
          <div
            className="name"
            style={{ fontSize: "14pt", fontWeight: "bold" }}
          >
            {personalInfo.name?.toUpperCase() ?? "DAVID EBO SAMPAH"}
          </div>
          <article>
            {personalInfo["postal address"] ?? "PMB CT 3, Cantonments"}
          </article>
          <article>
            <span>{personalInfo["phone number"] ?? "0546987125"}</span>/
            <span> {personalInfo["nationality"] ?? "Ghanaian"}</span>
          </article>
          <article>
            {personalInfo["email"] ?? "david.ebo@sampah.edu.gh"}
          </article>
          <article style={{ color: "dodgerblue" }}>
            {personalInfo["linkedin"] ?? "https://linkedin.com/ebo-sampah"}
          </article>
        </center>
      </div>
      <div className="education">
        <ResumeCategory name="education" />
        <BoldOneLineData
          left={personalInfo["university"] ?? "Ashesi University"}
          right={personalInfo["location"] ?? "Berekusu Easten Region"}
        />
        <BoldOneLineData
          left={personalInfo["program"] ?? "BSc. Computer Science"}
          right={
            personalInfo["expected date of graduation"] ??
            "Expected Date of Gradutaion: July 2016"
          }
        />
        <OneLineData
          left={"Cumulative GPA: " + (personalInfo["cgpa"] ?? "3.75/4.00")}
        />
        <br />

        <BoldOneLineData
          left={personalInfo["high school"] ?? "ABCD Senior High School"}
          right={personalInfo["high school location"] ?? "Cantonments, Accra"}
        />

        <BoldOneLineData
          left={personalInfo["high school program"] ?? "General Arts"}
          right={
            personalInfo["high school duration"] ?? "Sept 2009 - July 2012"
          }
        />
      </div>
      <br />
      <div className="achievements">
        <ResumeCategory name="achivements/awards" />
        <BoldOneLineData
          left={
            personalInfo["achievement 1"] ??
            "The MasterCard Foundation Scholar Program, Ashesi University"
          }
          right={personalInfo["duration 1"] ?? "2012 - 2016"}
        />

        <BoldOneLineData
          left={personalInfo["achievement 2"] ?? " Dean's List Honours"}
          right={personalInfo["duration 2"] ?? "2012 - 2013"}
        />
        <BoldOneLineData
          left={personalInfo["achievement 3"] ?? "Kufuor Scholar"}
          right={personalInfo["duration 3"] ?? "2018 - 2021"}
        />
      </div>
      <br />
      <div className="work-experience">
        <ResumeCategory name="work experience" />
        <MultiLineData
          firm={personalInfo["work experience 1 firm"] ?? "ABC Children's Home"}
          location={
            personalInfo["work experience 1 location"] ?? "Cantonments, Accra"
          }
          duration={
            personalInfo["work experience 1 duration"] ?? "June 2013 - Present"
          }
          position={
            personalInfo["work experience 1 position"] ?? "Marketing Intern"
          }
          impacts={[
            `${
              personalInfo["work experience 1 impact 1"] ??
              "Supervise the planning of the Annual Company Street Festival "
            }`,
            `${
              personalInfo["work experience 1 impact 2"] ??
              "Plan a charity event with the aim of raising $3000 to help provide shelter for street children "
            }`,
            `${
              personalInfo["work experience 1 impact 3"] ??
              "Update and manage the company’s website (increased website traffic by 20%)"
            }`,
          ]}
        />
        <br />
        <MultiLineData
          firm={personalInfo["work experience 2 firm"] ?? "XYZ Foundation"}
          location={
            personalInfo["work experience 2 location"] ?? "Dzorwulu, Accta"
          }
          duration={
            personalInfo["work experience 2 duration"] ??
            "December 20212 - May 2013"
          }
          position={personalInfo["work experience 2 position"] ?? "President"}
          impacts={[
            `${
              personalInfo["work experience 2 impact 1"] ??
              "Managed club and presided over club activities and Editorial Meetings"
            }`,
            `${
              personalInfo["work experience 2 impact 2"] ??
              "Organised seminars involving key figures to dialogue on the role of leadership in Africa"
            }`,
            `${
              personalInfo["work experience 2 impact 3"] ??
              "Increased membership and developed club programs by 22% and 40% respectively"
            }`,
          ]}
        />
      </div>
      <br />
      <div className="projects-research">
        <ResumeCategory name="projects & research" />
        <MultiLineData
          firm={
            personalInfo["projects & research firm"] ?? "Green Hills Consortium"
          }
          location={
            personalInfo["projects & research location"] ?? "Sawaba, Kumasi"
          }
          duration={
            personalInfo["projects & research duration"] ??
            "November 2013 - August 2014"
          }
          position={
            personalInfo["projects & research position"] ??
            "Jambo - Team Member"
          }
          impacts={[
            `${
              personalInfo["projects & research impact 1"] ??
              "Assisted a global team in designing and implementing a business model to provide digital access to 5.5 billion people living on less than $10 per day using a model that offers free mobile phone service"
            }`,
            `${
              personalInfo["projects & research impact 2"] ??
              "Supervise the planning of the Annual Company Street Festival"
            }`,
            `${
              personalInfo["projects & research impact 3"] ??
              "Supervise the planning of the Annual Company Street Festival"
            }`,
          ]}
        />
      </div>
      <br />
      <div className="co-curricular">
        <ResumeCategory name="co-curricular activities" />
        <MultiLineData
          firm={personalInfo["co-curricular firm"] ?? "Ashesi University"}
          location={
            personalInfo["co-curricular activity"] ??
            "Ashesi Robotics Experience"
          }
          duration={
            personalInfo["co-curricular duration"] ??
            "June 2013 - September 2014"
          }
          position={personalInfo["co-curricular position"] ?? "Mentor"}
          impacts={[
            `${
              personalInfo["co-curricular impact 1"] ??
              "Mentored 5 high school students for 1 week and helped them design a Robotic Tour Guide"
            }`,
            `${
              personalInfo["co-curricular impact 2"] ??
              "Supervised and evaluated group projects and weekly tasks"
            }`,
            `${
              personalInfo["co-curricular impact 3"] ??
              "Supervised and evaluated group projects and weekly tasks"
            }`,
          ]}
        />
      </div>
      <br />
      <div className="skills">
        <ResumeCategory name="skills" />
        <BulletedLineData
          data={personalInfo["skill 1"] ?? "Advanced Proficiency in French"}
        />
        <BulletedLineData
          data={
            personalInfo["skill 2"] ??
            "Programming Languages (Proficient in Java, C++, SQL, HTML, CSS, PHP, and JavaScript)"
          }
        />
        <BulletedLineData
          data={
            personalInfo["skill 3"] ??
            "Graphic designing using software such as Indigo Studio, Balsamic, Pencil, Lumzy "
          }
        />
      </div>
    </div>
  );
};

export default ResumeSheet;
