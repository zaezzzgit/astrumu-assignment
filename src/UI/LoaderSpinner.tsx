import { Fragment } from "react";
import classes from "./LoaderSpinner.module.css";

const LoaderSpinner: React.FC<{ withText?: boolean }> = (props) => {
  return (
    <Fragment>
      <div className={classes.loader}></div>
      {props.withText && <span>Loading...</span>}
    </Fragment>
  );
};

LoaderSpinner.defaultProps = {
  withText: false,
};

export default LoaderSpinner;
