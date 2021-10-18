import ResumeIconSVG from "assets/ResumeIconSVG";
import Ring from "components/ring/Ring";
import HomeStyles from "./home.module.css";

const Welcome = () => {
  return (
    <div className={HomeStyles.welcome}>
      <div className={HomeStyles.topRing}>
        <Ring />
      </div>
      <div>
        <div>
          <p style={{ color: "#ef5350", fontSize: "5vh" }}>AutoCV</p>
          <small style={{ color: "#aaa", fontSize: "3vh" }}>
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
