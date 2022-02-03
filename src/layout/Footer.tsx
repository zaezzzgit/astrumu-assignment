import { NavLink, Link } from "react-router-dom";

import logo from "../img/AU-Logo@4x.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.helper}>
          Need Help?
          <span>
            <a href="mailto:support@astrumu.com">Contact us</a>
          </span>
        </div>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="AstrumU logo." />
          </Link>
        </div>
        <div className={classes.nav_wrapper}>
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink
                  activeClassName={classes.link__active}
                  className={classes.link}
                  to="/terms-of-service"
                >
                  TERMS OF SERVICE
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.link__active}
                  className={classes.link}
                  to="/privacy-policy"
                >
                  PRIVACY POLICY
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
