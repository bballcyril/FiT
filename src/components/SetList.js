import React from "react";
import Set from "./Set";
function SetList({ sets }) {
  return (
    <ul>
      {sets.map((currentSet) => {
        return <Set name={currentSet.name} />;
      })}
    </ul>
  );
}

export default SetList;
