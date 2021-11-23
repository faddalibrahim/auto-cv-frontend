import Button from "components/button/Button";
import ResumeForm from "components/resume-form/ResumeForm";
import ResumeSheet from "components/resume-sheet/ResumeSheet";

const Create = () => {
  return (
    <>
      <ResumeSheet />
      <div>
        <div>save</div>
        <div>download</div>
        <div>preview</div>
      </div>
      <ResumeForm />
    </>
  );
};

export default Create;
