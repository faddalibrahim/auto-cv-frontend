import ResumeForm from "components/resume-form/ResumeForm";
import ResumeSheet from "components/resume-sheet/ResumeSheet";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Create = () => {
  return (
    <>
      <ResumeSheet />

      <Link to={`/to_pdf/ToPDF`} activeClassName="current">
        <div>
          DOWNLOAD
        </div>
      </Link>
      <ResumeForm />
    </>
  );
};

export default Create;
