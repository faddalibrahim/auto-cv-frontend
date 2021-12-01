//components
import ResumeIconSVG from "assets/ResumeIconSVG";
import Ring from "components/ring/Ring";

//styles
import HomeStyles from "./Home.module.scss";

const Welcome = () => {
  return (
    <div className={HomeStyles.welcome}>
      <div className={HomeStyles.topRing}>
        <Ring />
      </div>
      <div>
        <div>
          <h1 className={HomeStyles.appName}>AutoCV</h1>
          <small className={HomeStyles.appDescription}>
            ashesi resume generator
          </small>
        </div>
        <ResumeIconSVG />
      </div>
      <div className={HomeStyles.bottomRing}>
        <Ring />
      </div>
    </div>
  );
};

export default Welcome;
