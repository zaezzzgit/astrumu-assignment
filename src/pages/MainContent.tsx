import { useEffect } from "react";
import { setTitle } from "../store/features/headerSlice";
import { useAppDispatch } from "../store/hooks";

import IssuesList from "../components/IssuesList";
import ReposSection from "../components/ReposSection";

import classes from "./MainContent.module.css";

const MainContent: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTitle("Repositories"));
  }, [dispatch]);

  return (
    <main className={classes.main}>
      <ReposSection />
      <IssuesList />
    </main>
  );
};

export default MainContent;
