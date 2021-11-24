import OneLineData from "components/one-line-data/OneLineData";
import BoldOneLineData from "components/one-line-data/BoldOneLineData";
import ResumeSheetStyle from "./resume-sheet.module.scss";
import MultiLineData from "components/multi-line-data/MultiLineData";
import ResumeCategory from "components/resume-category/ResumeCategory";

const ResumeSheet = () => {
  return (
    <div className={ResumeSheetStyle.sheet}>
      <div className={ResumeSheetStyle.personalInfo}>
        <center>
          <div
            className="name"
            style={{ fontSize: "14pt", fontWeight: "bold" }}
          >
            DAVID EBO SAMPAH
          </div>
          <article>PMB CT 3, Cantonments</article>
          <article>
            <span>0546987125 </span>/<span> Ghanaian</span>
          </article>
          <article>david.ebo@ashesi.edu.gh</article>
          <article style={{ color: "dodgerblue" }}>
            https://linkedin.com
          </article>
        </center>
      </div>
      <div className="education">
        <ResumeCategory name="education" />
        <BoldOneLineData
          left="Ashesi University"
          right="Berekusu, Eastern Region"
        />
        <BoldOneLineData
          left="BSc. Computer Science"
          right="Expected Date of Gradutaion: July 2016"
        />
        <OneLineData left="Cumulative GPA: 3.75/4.00" />
        <br />

        <BoldOneLineData
          left="ABCD Senior High School"
          right="Cantonments, Accra"
        />

        <BoldOneLineData left="General Arts" right="Sept 2009 - July 2012" />
      </div>
      <br />
      <div className="achievements">
        <ResumeCategory name="achivements/awards" />
        <BoldOneLineData
          left="The MasterCard Foundation Scholar Program, Ashesi University"
          right="2012 - 2016"
        />
        <BoldOneLineData left="Dean's List Honours" right="2012 - 2013" />
      </div>
      <br />
      <div className="work-experience">
        <ResumeCategory name="work experience" />
        <MultiLineData
          firm="ABC Children's Home"
          location="Cantonments, Accra"
          duration="June 2013 - Present"
          position="Marketing Intern"
          impacts={[
            "Supervise the planning of the Annual Company Street Festival ",
            "Plan a charity event with the aim of raising $3000 to help provide shelter for street children ",
            "Update and manage the company’s website (increased website traffic by 20%)",
          ]}
        />
        <br />
        <MultiLineData
          firm="XYZ Foundation"
          location="Dzorwulu, Accta"
          duration="December 20212 - May 2013"
          position="President"
          impacts={[
            "Managed club and presided over club activities and Editorial Meetings",
            "Organised seminars involving key figures to dialogue on the role of leadership in Africa",
            "Increased membership and developed club programs by 22% and 40% respectively",
          ]}
        />
      </div>
      <br />
      <div className="projects-research">
        <ResumeCategory name="projects & research" />
        <MultiLineData
          firm="Green Hills Consortium"
          location="Sawaba, Kumasi"
          duration="November 2013 - August 2014"
          position="Jambo - Team Member"
          impacts={[
            "Assisted a global team in designing and implementing a business model to provide digital access to 5.5 billion people living on less than $10 per day using a model that offers free mobile phone service  ",
            "Supervise the planning of the Annual Company Street Festival ",
            "Supervise the planning of the Annual Company Street Festival ",
          ]}
        />
      </div>
      <br />
      <div className="co-curricular">
        <ResumeCategory name="co-curricular activities" />
        <MultiLineData
          firm="Ashesi University"
          location="Ashesi Robotics Experience"
          duration="June 2013 - September 2014"
          position="Mentor"
          impacts={[
            "Mentored 5 high school students for 1 week and helped them design a Robotic Tour Guide",
            "Supervised and evaluated group projects and weekly tasks",
          ]}
        />
      </div>
      <br />
      <div className="skills">
        <ResumeCategory name="skills" />
        <OneLineData left="• Advanced Proficiency in French" />
        <OneLineData left="• Programming Languages (Proficient in Java, C++, SQL, HTML, CSS, PHP, and JavaScript)" />
        <OneLineData left="• Graphic designing using software such as Indigo Studio, Balsamic, Pencil, Lumzy " />
      </div>
    </div>
  );
};

export default ResumeSheet;
