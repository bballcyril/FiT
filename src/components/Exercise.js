import React, { useState } from "react";
import SetList from "./SetList";
import {v4 as uuid} from 'uuid'
const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};

const Exercise = (props) => {
  let [sets, setSets] = useState([{ id: uuid(), lbs: 0, reps: 0 }]);

  function removeSet(id) {
    setSets(sets.filter((set) => id !== set.id));
  }
 
  return (
    <div className="container">
      <h1 contentEditable="true" onKeyDown={handleKeyPress}>
        {props.name}
      </h1>
      <SetList sets={sets} removeSet={removeSet}  />
      <button onClick={() => setSets([...sets, { id: uuid()}])}>Add Set</button>
    </div>
  );
};

export default Exercise;
