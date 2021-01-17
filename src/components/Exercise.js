import React, { useState } from "react";
import SetList from "./SetList";
import { v4 as uuid } from "uuid";
const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};

const Exercise = ({ name, id, removeExercise }) => {
  let [sets, setSets] = useState([{ id: uuid(), lbs: 0, reps: 0 }]);

  function removeSet(id) {
    setSets(sets.filter((set) => id !== set.id));
  }

  function handleRemoveExercise() {
    removeExercise(id);
  }
  return (
    <div className="container">
      <h1 contentEditable="true" onKeyDown={handleKeyPress}>
        {name}
      </h1>

      <SetList sets={sets} removeSet={removeSet} />
      <button onClick={() => setSets([...sets, { id: uuid() }])}>
        Add Set
      </button>
      <br />
      <button onClick={handleRemoveExercise}>Remove Exercise</button>
    </div>
  );
};

export default Exercise;
