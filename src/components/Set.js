import React from "react";
import {Button, TextField} from "@material-ui/core"
function Set({ id, removeSet, changeLBS, changeReps }) {
  function handleRemove() {
    removeSet(id);
  }
  function handleLBS(e) {
    changeLBS(id, e.target.value);
  }
  function handleReps(e) {
    changeReps(id, e.target.value);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="set">
      <TextField type="number" placeholder="Weight" onChange={handleLBS} />
      <TextField style={{marginLeft:'20px'}}type="number" placeholder="Reps" onChange={handleReps} />
      <Button style={{width:'20px'}}size='small'variant='contained' color='secondary'onClick={handleRemove}>X</Button>
    </div>
  );
}

export default Set;
