import Card from "../UI/Card";

import classes from "./Issue.module.css";
import issueIcon from "../img/issue-icon.svg";

const Issue: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <Card>
      <div className={classes.wrapper}>
        <img className={classes.icon} src={issueIcon} alt="Issue Icon." />
        <div className={classes.content_wrapper}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.description}>{props.description}</div>
        </div>
      </div>
    </Card>
  );
};

export default Issue;
