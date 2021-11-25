import React from 'react'
import Icon from "components/icon/Icon";
import Input from "components/input/Input";
import PersonalInformation from "components/personal-information/PersonalInformation";
import Education from "components/education/Education";
import Awards from "components/achievements/Awards";
import Experience from "components/work_experience/Experience";
import Projects from "components/projects/Projects";
import Curricular from "components/curricular/Curricular";
import Skills from "components/skills/Skills";
import {
  CHECK_CIRCLE_OUTLINE,
  MATERIAL_ICONS,
  MATERIAL_ICONS_OUTLINED,
  KEYBOARD_ARROW_DOWN,
} from "utils/MaterialIconsData";

const ResumeForm = () => {
  const [fieldsVisibility, setFieldsVisibility] = React.useState({
    personalInfor: "0",
    p_overflow: "hidden",

    education: "0",
    edu_overflow: "hidden",

    skills: "0",
    sk_overflow: "hidden",

    awards: "0",
    aw_overflow: "hidden",
    
    experience: "0",
    ex_overflow: "hidden",

    projects: "none",
    pro_overflow: "hidden",

    curricular: "none",
    cur_overflow: "hidden",
  })

  const togglePersonalInfor = () => {
    if (fieldsVisibility.personalInfor === "0")
      setFieldsVisibility({ ...fieldsVisibility, personalInfor:"auto",p_overflow: "visible" })
    else
      setFieldsVisibility({ ...fieldsVisibility, personalInfor: "0", p_overflow: "hidden"  })
  }
  
  const toggleEducation = () => {
    if (fieldsVisibility.education === "0")
      setFieldsVisibility({ ...fieldsVisibility, education: "auto", edu_overflow:"visible" })
    else
      setFieldsVisibility({ ...fieldsVisibility, education: "0", edu_overflow:"hidden" })
  }
  
  const toggleAwards = () => {
    if (fieldsVisibility.awards === "0")
      setFieldsVisibility({ ...fieldsVisibility, awards: "auto", aw_overflow:"visible" })
    else
      setFieldsVisibility({ ...fieldsVisibility, awards: "0", aw_overflow:"hidden" })
  }
  
  const toggleExperience = () => {
    if (fieldsVisibility.experience === "0")
      setFieldsVisibility({ ...fieldsVisibility, experience: "auto", ex_overflow:"visible" })
    else
      setFieldsVisibility({ ...fieldsVisibility, experience: "0", ex_overflow:"hidden" })
  }
  
  const toggleProjects = () => {
    if (fieldsVisibility.projects === "0")
      setFieldsVisibility({ ...fieldsVisibility, projects: "auto", pro_overflow:"visible" })
    else
      setFieldsVisibility({ ...fieldsVisibility, projects: "0", pro_overflow:"hidden" })
  }
  
  const toggleCurricular = () => {
    if (fieldsVisibility.curricular === "0")
      setFieldsVisibility({ ...fieldsVisibility, curricular: "auto", cur_overflow:"visible" })
    else
      setFieldsVisibility({ ...fieldsVisibility, curricular: "0", cur_overflow:"hidden" })
  }
  
  const toggleSkills = () => {
    if (fieldsVisibility.skills === "0")
      setFieldsVisibility({ ...fieldsVisibility, skills: "auto", sk_overflow:"visible" })
    else
      setFieldsVisibility({ ...fieldsVisibility, skills: "0", sk_overflow:"hidden" })
  }


  return (
    <form
      autoComplete="off"
      style={{
        padding: "1rem",
        boxShadow: "0px 4px 17px rgba(51, 51, 51, 0.1)",
        height: "100%",
        width: "25vw",
        backgroundColor: "white",
        overflowY:"scroll",
        overflowX:"scroll"
      }}
    >
      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
            transition:"0.3s ease-out"
          }}
          onClick = {togglePersonalInfor}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>PERSONAL INFORMATION</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          < PersonalInformation height={fieldsVisibility.personalInfor} width="100%" overflow={fieldsVisibility.p_overflow }/>
        </article>
      </section>

      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
          onClick = {toggleEducation}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>EDUCATION</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          < Education height={fieldsVisibility.education} width="100%" overflow={fieldsVisibility.edu_overflow }/>
        </article>
      </section>

      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
          onClick = {toggleAwards}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>ACHIEVEMENTS/AWARDS</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          <Awards height={fieldsVisibility.awards} width={"100px"} overflow={ fieldsVisibility.aw_overflow}/>
        </article>
      </section>
      
      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
          onClick = {toggleExperience}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>WORK EXPERIENCE</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          <Experience height={fieldsVisibility.experience} width={"100px"} overflow={ fieldsVisibility.ex_overflow}/>
        </article>
      </section>

      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
          onClick = {toggleAwards}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>ACHIEVEMENTS/AWARDS</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          <Awards height={fieldsVisibility.awards} width={"100px"} overflow={ fieldsVisibility.aw_overflow}/>
        </article>
      </section>

      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
            transitin:"0.3s ease-out"
          }}
          onClick = {toggleProjects}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>PROJECTS/RESEARCH</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article >
          <Projects height={fieldsVisibility.projects} width={"100px"} overflow={ fieldsVisibility.pro_overflow}/>
        </article>
      </section>

      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
          onClick = {toggleCurricular}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>CO-CURRICULAR</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          <Curricular height={fieldsVisibility.curricular} width={"100px"} overflow={ fieldsVisibility.cur_overflow}/>
        </article>
      </section>
      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
          onClick = {toggleSkills}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>SKILLS</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          <Skills height={fieldsVisibility.skills} width={"100px"} overflow={ fieldsVisibility.sk_overflow}/>
        </article>
      </section>
    </form>
  );
};

export default ResumeForm;
