import React from "react";
import {Button, TextField} from "@material-ui/core"
function Set({ exerciseId,id, removeSet, changeLbs, changeReps,lbs,reps }) {
  function handleRemove() {
    removeSet(exerciseId,id);
  }
  function handleLBS(e) {
    changeLbs(exerciseId,id, e.target.value);
  }
  function handleReps(e) {
    changeReps(exerciseId,id, e.target.value);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="set">
      <TextField type="number" placeholder='lbs' onChange={handleLBS} value ={lbs!==0 ? lbs :'lbs'} />
      <TextField style={{marginLeft:'20px'}}type="number" placeholder='Reps' onChange={handleReps} value={reps!==0 ? reps :'Reps'}/>
      <Button style={{width:'20px',marginLeft:'10px'}}size='small'variant='contained' color='secondary'onClick={handleRemove}>X</Button>
    </div>
  );
}

export default Set;
