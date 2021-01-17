import React, { useState } from "react";
import Set from "./Set";
import { v4 as uuid } from "uuid";
import {Button} from "@material-ui/core"

function SetList(props) {
  let [sets, setSets] = useState([{ id: uuid(), lbs: 0, reps: 0 }]);
  
  function changeLBS(id, lbs) {
    let newArr = [...sets];
    const index = newArr.findIndex((element) => element.id === id);
    newArr[index] = { ...newArr[index], lbs: lbs };
    setSets(newArr);
  }
  
  function changeReps(id, reps) {
    let newArr = [...sets];
    const index = newArr.findIndex((element) => element.id === id);
    newArr[index] = { ...newArr[index], reps: reps };
    setSets(newArr);
  }
  function removeSet(id) {
    setSets(sets.filter((set) => id !== set.id));
  }
  return (
    <>
      <ul>
        {sets.map((currentSet) => {
          return (
            <Set
              key={currentSet.id}
              id={currentSet.id}
              name={currentSet.name}
              removeSet={removeSet}
              changeLBS={changeLBS}
              changeReps={changeReps}
            />
          );
        })}
      </ul>
      <Button variant='outlined' color='primary'onClick={() => setSets([...sets, { id: uuid() }])}>
        Add Set
      </Button>
    </>
  );
}

export default SetList;
