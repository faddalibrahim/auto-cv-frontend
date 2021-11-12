// libraries
import { Component } from "react";

//components
import ErrorBoundarySvg from "./ErrorBoundarySvg";
import Button from "components/button/Button";

// styles
import ErrorBoundaryStyles from "./ErrorBoundary.module.scss";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo }, () => {
      console.table({ error, errorInfo });
      console.log(this.state.error.message);
    });
  }

  sendErrorReport = () => {
    alert("Report Sent! Thanks for reporting this error");
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={ErrorBoundaryStyles.outerContainer}>
          <div className={ErrorBoundaryStyles.innerContainer}>
            <center>
              <ErrorBoundarySvg />
              <span>Oops something went wrong</span>
              <Button onClick={this.sendErrorReport}>Report</Button>
            </center>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
