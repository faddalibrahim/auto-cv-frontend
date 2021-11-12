import { Loading } from "react-loading-dot";
import "./loader.css";

//A simple loader
const Loader = () => {
  return (
    <div className="loader">
      <div className="loadersMain">
        <div id="realLoader">
          <Loading
            size="0.7rem"
            margin="0.1rem"
            dots="3"
            background="#ef5350"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
