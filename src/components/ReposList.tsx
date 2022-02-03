import { useAppDispatch } from "../store/hooks";
import { setOwnerRepo } from "../store/features/issuesSlice";
import { RepoItem } from "../types/Types";

import Repo from "./Repo";

import classes from "./ReposList.module.css";

const ReposList: React.FC<{ data: RepoItem[] }> = (props) => {
  const dispatch = useAppDispatch();
  const loadIssuesListHandler = (id: string, name: string) => {
    dispatch(setOwnerRepo({ id, name }));
  };

  return (
    <ul className={classes.ul}>
      {props.data.map((item) => {
        return (
          <li key={item.id}>
            <Repo
              repo={item}
              onClick={loadIssuesListHandler.bind(null, item.id, item.name)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ReposList;
