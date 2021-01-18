import React from "react";
import SetList from "./SetList";
import {Button,TextField} from "@material-ui/core"


const Exercise = ({ name, id, removeExercise, changeName ,sets,addSet,removeSet,changeLbs,changeReps}) => {

  function handleRemoveExercise() {
    removeExercise(id);
  }

  function handleKeyPress(event) {
    changeName(id, event.target.value);
  }

  return (
    <div className="container">
      <TextField size='large'style={{size:'50px'}}type="text" onChange={handleKeyPress} placeholder={name} />
      <SetList sets={sets} addSet={addSet} removeSet={removeSet} id={id} changeLbs={changeLbs} changeReps={changeReps}/>
      <br />
      <Button style= {{marginTop:'10px'}}variant='contained' color='secondary'onClick={handleRemoveExercise}>Remove Exercise</Button>
    </div>
  );
};

export default Exercise;
