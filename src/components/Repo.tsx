import Card from "../UI/Card";
import { RepoItem } from "../types/Types";

import repoIcon from "../img/repo-icon.svg";
import classes from "./Repo.module.css";

const Repo: React.FC<{
  repo: RepoItem;
  onClick: () => void;
}> = (props) => {
  return (
    <Card pointerOnHover={true}>
      <div className={classes.wrapper} onClick={props.onClick}>
        <img src={repoIcon} alt="Repository icon." />
        <div className={classes.content}>
          <span className={classes.content_title}>{props.repo.name}</span>
          <div className={classes.content_description}>
            {props.repo.description}
          </div>
          <div className={classes.content_tags}>
            <span>javascript</span>
            <span>react</span>
            <span>frontend</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Repo;
