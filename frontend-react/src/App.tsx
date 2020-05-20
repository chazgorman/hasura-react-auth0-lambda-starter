import "./App.css";

import { Auth0Provider, useAuth0 } from "./util/AuthZeroWrapper";
import { Layout, Menu } from "antd";
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { StringParam, useQueryParams } from "use-query-params";

import Admin from "./admin";
import { MakeApolloClient } from "./util/MakeApolloClient";
import React from "react";
import ReactJson from "react-json-view";
import { SampleQuery } from "./util/samples";

const { Header, Content, Footer, Sider } = Layout;

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
  const { handleRedirectCallback } = useAuth0();
  const [queryParams] = useQueryParams({
    error: StringParam,
    error_description: StringParam,
  });
  if (!queryParams.error && !queryParams.error_description) {
    handleRedirectCallback?.().then(() =>
      setTimeout(() => history.replace("/admin"), 100)
    );
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
  const { isAuthenticated, loginWithRedirect } = useAuth0() || {};
  return (
    <Router>
      <Switch>
        <Route exact path="/logout" component={Logout} />
        <Route path="/oauth/auth0">
          <OauthLanding />
        </Route>
        <Route exact path="/">
          {isAuthenticated ? (
            <Redirect to="/admin" />
          ) : (
            <div>
              Please login
              <button onClick={() => loginWithRedirect()}>login</button>
            </div>
          )}
        </Route>
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
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
        <MakeApolloClient>
          <AppInner />
        </MakeApolloClient>
      </Auth0Provider>
    </div>
  );
}

export default App;
