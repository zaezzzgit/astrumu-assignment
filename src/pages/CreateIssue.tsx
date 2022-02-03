import Card from "../UI/Card";
import Button from "../UI/Button";
import { gql, useMutation } from "@apollo/client";

import classes from "./CreateIssue.module.css";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTitle } from "../store/features/headerSlice";
//import { addIssue } from "../store/features/issuesSlice";
// import { Issue } from "../types/Types";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import { FETCH_ISSUES } from "../store/queries";

const CREATE_ISSUE = gql`
  mutation AddIssue($repoId: String, $issueTitle: String, $issueBody: String) {
    createIssue(
      input: { repositoryId: $repoId, title: $issueTitle, body: $issueBody }
    ) {
      clientMutationId
    }
  }
`;

const CreateIssue: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useAppDispatch();
  const owner = useAppSelector((state) => state.issuesSlice.ownerRepo);
  useEffect(() => {
    dispatch(setTitle("Create Issue for: " + owner.name));
  }, [dispatch, owner.name]);

  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [issueTitleWasTouched, setIssueTitleWasTouched] = useState(false);
  const [issueDescriptionWasTouched, setIssueDescriptionWasTouched] =
    useState(false);

  const titleIsValid = issueTitle.trim().length >= 3;
  const descriptionIsValid = issueDescription.trim().length >= 3;
  const formIsValid = titleIsValid && descriptionIsValid;

  const issueTitleFocusHandler = () => {
    if (!issueTitleWasTouched) {
      setIssueTitleWasTouched(true);
    }
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle: string = event.currentTarget.value;
    setIssueTitle(newTitle);
  };

  const issueDescriptionFocusHandler = () => {
    if (!issueDescriptionWasTouched) {
      setIssueDescriptionWasTouched(true);
    }
  };

  const descriptionChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription: string = event.currentTarget.value;
    setIssueDescription(newDescription);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(issueTitle, issueDescription, owner.id);
    addIssue({
      variables: {
        repoId: owner.id,
        issueTitle: issueTitle,
        issueBody: issueDescription,
      },
    });
  };

  const [addIssue, { data, loading, error }] = useMutation(CREATE_ISSUE, {
    refetchQueries: [{ query: FETCH_ISSUES, variables: { repoId: owner.id } }],
  });
  if (loading) console.log("Submitting...");
  if (error) console.log(`Submission error! ${error.message}`);

  if (data) {
    console.log("Submitted");
  }

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [history, data]);

  let titleInputClasses = classes.input__title;

  if (titleIsValid) {
    titleInputClasses += " " + classes.valid;
  }

  if (issueTitleWasTouched && !titleIsValid) {
    titleInputClasses += " " + classes.invalid;
  }

  let descriptionInputClasses = classes.input__description;

  if (descriptionIsValid) {
    descriptionInputClasses += " " + classes.valid;
  }

  if (issueDescriptionWasTouched && !descriptionIsValid) {
    descriptionInputClasses += " " + classes.invalid;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.form_wrapper}>
        <Card>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={formSubmitHandler}
          >
            <h1>Submit issue</h1>
            <label htmlFor="iTitle">required* (at least 3 characters)</label>
            <input
              type="text"
              className={titleInputClasses}
              value={issueTitle}
              placeholder="Title"
              id="iTitle"
              onFocus={issueTitleFocusHandler}
              onChange={titleChangeHandler}
            />

            <label htmlFor="iDescription">
              required* (at least 3 characters)
            </label>
            <textarea
              className={descriptionInputClasses}
              value={issueDescription}
              placeholder="Description"
              id="iDescription"
              onFocus={issueDescriptionFocusHandler}
              onChange={descriptionChangeHandler}
            />
            <Button disabled={!formIsValid}>SUBMIT</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(CreateIssue);
