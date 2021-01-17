import React from "react";
import Set from "./Set";
function SetList({ sets, removeSet }) {
  return (
    <ul>
      {sets.map((currentSet) => {
        return (
          <Set
            key={currentSet.id}
            id={currentSet.id}
            name={currentSet.name}
            removeSet={removeSet}
          />
        );
      })}
    </ul>
  );
}

export default SetList;
