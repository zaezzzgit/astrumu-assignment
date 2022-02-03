import { Route, Switch } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainContent from "./pages/MainContent";
import CreateIssue from "./pages/CreateIssue";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app_wrapper}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainContent />
        </Route>
        <Route path="/create-issue/">
          <CreateIssue />
        </Route>
        <Route path="/terms-of-service/">
          <TermsOfService />
        </Route>
        <Route path="/privacy-policy/">
          <PrivacyPolicy />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
