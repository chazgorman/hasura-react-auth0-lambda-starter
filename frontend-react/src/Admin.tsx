import React from "react";
import ReactJson from "react-json-view";
import { useIsAdmin } from "./util/auth";

const Admin: React.FC = () => {
  const token = useIsAdmin();
  return (
    <div>
      hi
      <ReactJson src={token} />
    </div>
  );
};

export default Admin;
