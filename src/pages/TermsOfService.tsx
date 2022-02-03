import { useAppDispatch } from "../store/hooks";
import { setTitle } from "../store/features/headerSlice";
import { useEffect } from "react";

import classes from "./TermsOfService.module.css";

const TermsOfService = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTitle("Terms of service"));
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.content_wrapper}>
        This is the terms of service page.
      </div>
    </div>
  );
};

export default TermsOfService;
