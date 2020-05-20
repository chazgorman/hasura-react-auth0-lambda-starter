import * as jwt from "jsonwebtoken";

// import React from "react";
import { CheckedAuthZeroUser, useAuth0 } from "./AuthZeroWrapper";

export const useIsAdmin = () => {
  const { token } = useAuth0() || {};
  if (!token) {
    return null;
  }
  const tokenObj = jwt.decode(token) as Partial<CheckedAuthZeroUser>;
  const arr =
    tokenObj?.["https://hasura.io/jwt/claims"]?.["x-hasura-allowed-roles"] ??
    [];
  return arr.includes("admin");
};

export const useJwt = () => {
  const { token } = useAuth0() || {};
  if (!token) {
    return null;
  }
  return jwt.decode(token) as Partial<CheckedAuthZeroUser>;
};
