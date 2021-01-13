import React from "react";

function Set({id, lbs,reps,removeSet}) {
    function handleRemove(){
        removeSet(id)
    }
   
  return (
    <div style={{ display: "flex",justifyContent:'center'}}>
      <input type="number" placeholder='LBS' />
      <input type="number"placeholder='REPS'/>
      <button onClick = {handleRemove}>X</button>
    </div>
  );
}

export default Set;
