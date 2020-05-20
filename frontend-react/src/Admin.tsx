import React from "react";
import ReactJson from "react-json-view";
import { useAuth0 } from "./util/AuthZeroWrapper";
import { useIsAdmin } from "./util/auth";

const Admin: React.FC = () => {
  const isAdmin = useIsAdmin();
  const { authZeroUser } = useAuth0();
  return (
    <div>
      hi {isAdmin ? "admin" : "error"}
      <ReactJson src={authZeroUser || {}} />{" "}
    </div>
  );
};

export default Admin;
