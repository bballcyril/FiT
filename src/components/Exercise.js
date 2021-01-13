import React, { useState } from "react";
import Set from "./Set";
import SetList from "./SetList";

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};
const Exercise = (props) => {
  let [sets, setSets] = useState([{ name: "Exercise 1" }]);
  return (
    <div className="container">
      <h1 contentEditable="true" onKeyDown={handleKeyPress}>
        {props.name}
      </h1>
      <SetList sets={sets} />
      <button onClick={() => setSets([...sets, { name: "2" }])}>Add Set</button>
    </div>
  );
};

export default Exercise;
