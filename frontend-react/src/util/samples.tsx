import React from "react";
import ReactJson from "react-json-view";
import { useSampleQuery } from "../__generated__/components";

export const SampleQuery: React.FC = () => {
  const { data, loading, error } = useSampleQuery();
  return (
    <div style={{ textAlign: "left" }}>
      sample query: <br />
      <ReactJson src={{ data, loading, error }} />{" "}
    </div>
  );
};
