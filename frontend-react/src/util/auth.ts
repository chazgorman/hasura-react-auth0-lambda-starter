import * as jwt from "jsonwebtoken";

// import React from "react";
import { useAuth0 } from "./AuthZeroWrapper";

export const useIsAdmin = () => {
  const { token } = useAuth0() || {};
  const tokenObj = jwt.decode(token);
  return tokenObj;
};
