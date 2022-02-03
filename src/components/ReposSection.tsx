import { Fragment, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useAppDispatch } from "../store/hooks";
import { setUserName, setUserDataLoaded } from "../store/features/headerSlice";
import { RepoItem, User } from "../types/Types";
import { FETCH_REPOS_LIST } from "../store/queries";

import Button from "../UI/Button";
import ReposList from "./ReposList";
import LoaderSpinner from "../UI/LoaderSpinner";

import mailIcon from "../img/email-icon.svg";
import reposIcon from "../img/repos-num-icon.svg";
import classes from "./ReposSection.module.css";

const userHandle: string = "zaezzzgit";
// const userHandle: string = "vtereshyn";
let loadingByButton: boolean = false;
let user: User = new User();

const ReposSection = () => {
  const dispatch = useAppDispatch();
  const [reposList, setReposList] = useState<RepoItem[]>([]);
  const [loadMoreButtonIsDisabled, setLoadMoreButtonIsDisabled] =
    useState(true);

  const { loading, data, fetchMore } = useQuery(FETCH_REPOS_LIST, {
    variables: {
      userHandle,
      limit: 5,
      endCursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data) {
      if (data.user.email !== null) {
        if (data.user.email.trim() !== "") {
          user.email = data.user.email;
        }
      }
      if (data.user.name !== null) {
        if (data.user.name.trim()) {
          user.name = data.user.name;
        }
      }
      dispatch(setUserName(user.name));
      dispatch(setUserDataLoaded(true));
      user.reposCount = data.user.repositories.totalCount;

      if (data.user.repositories.pageInfo.hasNextPage) {
        setLoadMoreButtonIsDisabled(false);
      } else setLoadMoreButtonIsDisabled(true);

      setReposList(data.user.repositories.nodes);
    }
  }, [data, dispatch]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.account_details}>
        {!loading && (
          <Fragment>
            <div className={classes.account_details_userData}>
              {user.name} (@{userHandle})
            </div>
            {user.email !== "" && (
              <div className={classes.account_details_field}>
                <img src={mailIcon} alt="Mail icon." />
                <span>{user.email}</span>
              </div>
            )}
            <div className={classes.account_details_field}>
              <img src={reposIcon} alt="Repos icon." />
              <span>{user.reposCount} repositories</span>
            </div>
          </Fragment>
        )}
      </div>

      {loading && !loadingByButton ? <LoaderSpinner withText={true} /> : ""}
      <ReposList data={reposList} />
      <Button
        onClick={() => {
          loadingByButton = true;
          setLoadMoreButtonIsDisabled(true);
          fetchMore({
            variables: {
              endCursor: data.user.repositories.pageInfo.endCursor,
            },
          });
        }}
        disabled={loadMoreButtonIsDisabled}
      >
        {loading && loadingByButton ? <LoaderSpinner /> : "LOAD MORE"}
      </Button>
    </div>
  );
};

export default ReposSection;
