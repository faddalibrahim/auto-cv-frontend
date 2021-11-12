import { useState } from "react";
import { Link } from "react-router-dom";

// components
import Button from "components/button/Button";

import { LOGIN, HOME } from "utils/routes";
import { MATERIAL_ICONS, CHECK_CIRCLE_OUTLINE } from "utils/MaterialIconsData";

/**
 * TODO : if backend takes long, or network error, display an appropriate message
 * TODO : instead of leaving the user with an infinite loading aimation
 * @param {*} props
 * @returns
 */

const EmailVerificationProcess = (props) => {
  const [verified, setVerified] = useState(true);
  const [failedVerification, setFailedVerification] = useState(false);

  if (failedVerification) {
    // console.log(props.history.push("/home"));
    // setVerificationStatusMessage("sorry, we could'nt verify you");
  }

  return (
    <div>
      {verified ? (
        <>
          <h1>
            Verification Successful
            <i style={{ color: "#1CBB6F" }} class={MATERIAL_ICONS}>
              {CHECK_CIRCLE_OUTLINE}
            </i>
          </h1>
          <p>login to your account to get started</p>
          <Link to={`${HOME}/${LOGIN}`}>
            <Button>{LOGIN}</Button>
          </Link>
        </>
      ) : failedVerification ? (
        <>
          <h1>Error Verifying you</h1>
          <div>couldn't verify you at this time</div>
        </>
      ) : (
        <>
          <h1>Verifying you...</h1>
          <div>please be patient</div>
        </>
      )}
    </div>
  );
};

export default EmailVerificationProcess;
