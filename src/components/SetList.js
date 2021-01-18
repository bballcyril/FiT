import React from "react";
import Set from "./Set";

import {Button} from "@material-ui/core"

function SetList({sets,addSet,removeSet,id,changeReps,changeLbs}) {

  function handleAddSet(){
    addSet(id)
  }
  return (
    <>
      <ul>
        {sets.map((currentSet) => {
          return (
            <Set
              key={currentSet.setId}
              exerciseId={id}
              id={currentSet.setId}
              name={currentSet.name}
              removeSet={removeSet}
              changeReps={changeReps}
              changeLbs={changeLbs}
              lbs={currentSet.lbs}
              reps={currentSet.reps}
            />
          );
        })}
      </ul>
      <Button variant='outlined' color='primary' onClick={handleAddSet}>
        Add Set
      </Button>
    </>
  );
}
//onClick={() => setSets([...sets, { id: uuid() }])}
export default SetList;
