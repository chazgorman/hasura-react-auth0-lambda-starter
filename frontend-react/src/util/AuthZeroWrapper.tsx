import * as jwt from "jsonwebtoken";

// src/react-auth0-spa.js
// import { Spin, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";
import createAuth0Client from "@auth0/auth0-spa-js";

// import * as _ from "lodash";

export const DEFAULT_REDIRECT_CALLBACK = (_?: any) => {
  // console.log("DEFAULT_REDIRECT_CALLBACK");
  window.history.replaceState({}, document.title, window.location.pathname);
};

export type CheckedAuthZeroUser = {
  "https://hasura.io/jwt/claims": {
    "x-hasura-issued-at": string;
    "x-hasura-default-role": string;
    "x-hasura-user-id": string;
    "x-hasura-allowed-roles": Array<string>;
    "x-hasura-email": string;
  };
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  gender?: string;
  locale: string;
  updated_at: string;
  email: string;
  email_verified?: boolean;
  sub?: string;
};

function isCheckedAuthZeroUser(
  obj: any
): obj is undefined | CheckedAuthZeroUser {
  if (!obj) {
    return true;
  }
  if (typeof obj !== "object") {
    throw new Error("Not an object");
  }

  [
    "given_name",
    "family_name",
    "nickname",
    "name",
    "picture",
    // "gender",
    "locale",
    "updated_at",
    "email",
  ].forEach((s) => {
    if (!obj[s]) {
      throw new Error("AuthZero user is missing key: " + s);
    }
  });
  if (!obj["https://hasura.io/jwt/claims"]) {
    throw new Error(
      "AuthZero user is missing hasura claims: " + JSON.stringify(obj)
    );
  }
  [
    "x-hasura-issued-at",
    "x-hasura-default-role",
    "x-hasura-user-id",
    "x-hasura-allowed-roles",
    "x-hasura-email",
  ].forEach((s) => {
    if (!obj["https://hasura.io/jwt/claims"][s]) {
      throw new Error("AuthZero user is missing claim: " + s);
    }
  });
  return true;
}
interface Auth0Context {
  isAuthenticated: boolean; // Auth0Client["isAuthenticated"];
  authZeroUser?: CheckedAuthZeroUser;
  token?: string;
  loading: boolean;
  popupOpen: boolean;
  loginWithPopup: (params?: {}) => Promise<void>;
  handleRedirectCallback: () => Promise<RedirectLoginResult>;
  getIdTokenClaims: Auth0Client["getIdTokenClaims"];
  loginWithRedirect: Auth0Client["loginWithRedirect"];
  getTokenSilently: Auth0Client["getTokenSilently"];
  getTokenWithPopup: Auth0Client["getTokenWithPopup"];
  logout: Auth0Client["logout"];
}

const decodeTokenExp = (token: string) => {
  const exp = (jwt.decode(token) as any)?.exp;
  return exp ? exp * 1000 : null;
};

const millisToExp = (token: string) => {
  const exp = decodeTokenExp(token);
  if (!exp) {
    return null;
  }
  return exp - Date.now();
};

export const Auth0Context = React.createContext<Auth0Context>(undefined as any);
export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider: React.FC<
  Omit<Auth0ClientOptions, "prompt"> & {
    prompt: "select_account consent" | Auth0ClientOptions["prompt"];
  }
> = ({
  children,
  //   onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const onRedirectCallback = DEFAULT_REDIRECT_CALLBACK;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authZeroUser, setAuthZeroUser] = useState<CheckedAuthZeroUser>();
  const [token, setToken] = useState<string | undefined>();
  const [auth0Client, setAuth0Client] = useState<Auth0Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      // console.log(initOptions);
      const auth0FromHook = await createAuth0Client(
        initOptions as Auth0ClientOptions
      )
        .catch((e) => {
          console.error(e);
          throw new Error(e);
        })
        .then((e) => {
          // console.log(e);
          return e;
        });
      setAuth0Client(auth0FromHook);
      // const tempTok = await auth0FromHook.getTokenSilently();
      // console.log("tok", tempTok);
      console.log(initOptions, window.location.href, window.location.search);
      // console.log(auth0FromHook);
      if (
        window.location.href.includes("oauth/auth0") &&
        window.location.search.includes("code=")
      ) {
        console.log("Got code from auth0: ", window.location.search);
        const { appState } = await auth0FromHook.handleRedirectCallback();
        // console.log(appState);
        onRedirectCallback(appState);
      }
      const isAuthenticated = await auth0FromHook.isAuthenticated();
      setIsAuthenticated(isAuthenticated);
      // console.log("isAuthed:", isAuthenticated);
      if (isAuthenticated) {
        console.debug("IsAuthenticated is true");
        const user = await auth0FromHook.getUser();
        const token = await auth0FromHook.getIdTokenClaims();
        // RELOAD logic to
        if (token) {
          setToken(token.__raw);
          // const refresh = millisToExp(token.__raw);
          // if (refresh) {
          //   setTimeout(() => {
          //     window.location.reload();
          //   }, refresh - 10000);
          // }
        }
        isCheckedAuthZeroUser(user) && setAuthZeroUser(user);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    if (!auth0Client) {
      return;
    }
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    isCheckedAuthZeroUser(user) && setAuthZeroUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    // if (!window.location.href.match(/.*oauth\/auth0.*/)) {
    //   console.log("not auth0");
    //   return;
    // }
    console.log("hRC");
    if (!auth0Client) {
      throw new Error("Missing auth0client in redirect");
    }
    setLoading(true);
    const res = await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    isCheckedAuthZeroUser(user) && setAuthZeroUser(user);
    // console.log("hRC");
    auth0Client
      .getTokenSilently()
      // .then(v => console.log("silently", v))
      .catch((e) => console.error(e));
    return res;
  };
  if (!auth0Client) {
    return <div>Loading Auth0 client</div>;
  }
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        authZeroUser,
        token,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (o, ...p) => auth0Client.loginWithRedirect(o, ...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

export const AuthedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated, loading } = useAuth0() || {};
  if (loading) {
    return <div> Loading user data from autho</div>;
  }
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/"></Redirect>)}
    />
  );
};
