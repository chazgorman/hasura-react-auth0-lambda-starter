import React from "react";
import ReactJson from "react-json-view";
import { useSampleQuery } from "../__generated__/components";

export const SampleQuery: React.FC = () => {
  const result = useSampleQuery();
  return (
    <div>
      sample query: <br />
      <ReactJson src={result} />{" "}
    </div>
  );
};
