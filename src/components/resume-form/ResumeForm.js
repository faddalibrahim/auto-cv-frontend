// styles
import ResumeFormStyles from "./resume-form.module.scss";

import sections from "./ResumeFormSections";

import SubForm from "./SubForm";

// redux stuff

const ResumeForm = () => {
  return (
    <form autoComplete="off" className={ResumeFormStyles.form}>
      {sections.map((section, index) => (
        <section key={index} id={section.title}>
          <SubForm section={section} />
        </section>
      ))}
    </form>
  );
};

export default ResumeForm;
