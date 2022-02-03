import { useAppDispatch } from "../store/hooks";
import { setTitle } from "../store/features/headerSlice";
import { useEffect } from "react";

import classes from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTitle("Privacy Policy"));
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.content_wrapper}>
        This is the privacy policy page.
      </div>
    </div>
  );
};

export default PrivacyPolicy;
