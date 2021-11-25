import React, {useRef} from 'react'
import ReactToPrint from 'react-to-print';
import ResumeSheet from "components/resume-sheet/ResumeSheet"

const ToPDF = () => {
    const componentRef = useRef();
    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <ResumeSheet ref={componentRef} />
        </div>
    );
};

export default ToPDF

