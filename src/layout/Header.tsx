import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

import logo from "../img/AU-Logo@4x.png";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  const state = useAppSelector((state) => state.headerSlice);
  let userNameIsValid: boolean = false;

  if (state.userDataLoaded) {
    if (state.userName !== "" && state.userName !== null) {
      userNameIsValid = true;
    }
  }

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="AstrumU logo." />
          </Link>
        </div>

        <div className={classes.header_title}>{state.pageTitle}</div>

        {state.userDataLoaded && userNameIsValid ? (
          <div className={classes.account_wrapper}>
            <div className={classes.account_name}>
              {state.userName}
            </div>
            <div className={classes.account_box}>
              {state.userName.charAt(0)}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
