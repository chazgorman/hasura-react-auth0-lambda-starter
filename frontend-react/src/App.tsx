import "./App.css";

import { Auth0Provider, useAuth0 } from "./util/AuthZeroWrapper";

import { MakeApolloClient } from "./util/MakeApolloClient";
import React from "react";
import { SampleQuery } from "./util/samples";

const AppInner: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0() || {};
  return (
    <MakeApolloClient>
      {isAuthenticated ? (
        <div>
          authed
          <br />
          <SampleQuery />
          <br />
          <button onClick={() => logout()}>logout</button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>login</button>
      )}
    </MakeApolloClient>
  );
};

function App() {
  return (
    <div className="App">
      <>
        <Auth0Provider
          redirect_uri={window.location.origin + "/oauth/auth0"}
          access_type="offline"
          prompt="select_account consent"
          client_id={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
          domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
        >
          <AppInner />
        </Auth0Provider>
      </>
    </div>
  );
}

export default App;
