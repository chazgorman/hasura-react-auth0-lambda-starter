import "./App.css";

import { Auth0Provider, useAuth0 } from "./util/AuthZeroWrapper";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { StringParam, useQueryParams } from "use-query-params";

import { MakeApolloClient } from "./util/MakeApolloClient";
import React from "react";
import ReactJson from "react-json-view";
import { SampleQuery } from "./util/samples";

const Logout = () => {
  const authZero = useAuth0();
  authZero.logout();
  // const [queryParams] = useQueryParams({ redirectTo: StringParam });
  // const history = useHistory();
  // if (queryParams?.redirectTo) {
  //   history.replace(queryParams.redirectTo);
  // } else {
  //   history.replace("/");
  // }
  return <div>logout</div>;
};

const OauthLanding: React.FC = () => {
  const history = useHistory();
  const [queryParams] = useQueryParams({
    error: StringParam,
    error_description: StringParam,
  });
  if (!queryParams.error && !queryParams.error_description) {
    console.log("oauth landing.. redirect to home");
    setTimeout(() => history.push("/test"), 1000);
    return <Link to="/">oauth next step</Link>;
  }
  return <div> ERROR</div>;
};

const REDIRECT_ON_LOGIN_KEY = "speedycal-login-redirect";
export const setRedirectOnLogin = (path: string) =>
  localStorage.setItem(REDIRECT_ON_LOGIN_KEY, path);

export const popRedirectOnLogin = () => {
  const p = localStorage.getItem(REDIRECT_ON_LOGIN_KEY);
  localStorage.removeItem(REDIRECT_ON_LOGIN_KEY);
  return p;
};

const AppInner: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0() || {};
  return (
    <MakeApolloClient>
      <Router>
        <Switch>
          <Route exact path="/logout" component={Logout} />
          <Route path="/oauth/auth0">
            <OauthLanding />
          </Route>
          <Route exact path="/test">
            <Link to="/">go home</Link>
          </Route>
          <Route exact path="/">
            {isAuthenticated ? (
              <div>
                authed
                <br />
                <SampleQuery />
                <br />
                <button onClick={() => logout()}>logout</button>
              </div>
            ) : (
              <div>
                Please login
                <button onClick={() => loginWithRedirect()}>login</button>
              </div>
            )}
          </Route>
        </Switch>
      </Router>
    </MakeApolloClient>
  );
};

function App() {
  return (
    <div className="App">
      <Auth0Provider
        redirect_uri={window.location.origin + "/oauth/auth0"}
        access_type="offline"
        prompt="select_account consent"
        client_id={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
      >
        <AppInner />
      </Auth0Provider>
    </div>
  );
}

export default App;
