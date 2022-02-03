import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { Fragment } from "react";
import { useQuery } from "@apollo/client";

import Button from "../UI/Button";
import LoaderSpinner from "../UI/LoaderSpinner";
import Issue from "./Issue";
import classes from "./IssuesList.module.css";

import { FETCH_ISSUES } from "../store/queries";
import { iIssue } from "../types/Types";

const IssuesList = () => {
  const repoName = useAppSelector((state) => state.issuesSlice.ownerRepo.name);
  const repoId = useAppSelector((state) => state.issuesSlice.ownerRepo.id);

  let issuesArray: iIssue[] = [];

  const { loading, data } = useQuery(FETCH_ISSUES, {
    skip: repoId === "",
    variables: {
      repoId: repoId,
    },
  });

  if (data) {
    issuesArray = data.node.issues.nodes;
  }

  return (
    <div className={classes.wrapper}>
      {repoId !== "" ? (
        <Fragment>
          <div className={classes.header_text}>Issues for: {repoName}</div>
          <ul>
            {loading && <LoaderSpinner withText={true} />}
            {issuesArray.length > 0
              ? issuesArray.map((item: any) => {
                  return (
                    <li key={item.id}>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <Issue title={item.title} description={item.body} />
                      </a>
                    </li>
                  );
                })
              : !loading && <p>No issues found</p>}
            <div>
              <Link to="/create-issue">
                <Button color="#f15d5d">CREATE ISSUE</Button>
              </Link>
            </div>
          </ul>
        </Fragment>
      ) : (
        <div className={classes.header_text}>
          Please select a repository on the left to load it's issues.
        </div>
      )}
    </div>
  );
};

export default IssuesList;
