import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import { v4 as uuid } from "uuid";
import {Button} from "@material-ui/core"

const LOCAL_STORAGE_KEY = "exerciseList";
function ExerciseList() {
  let [exercises, setExercises] = useState([
    { id: uuid(), name: `Exercise 1`, sets: [{ setId:uuid(),lbs: 0, reps: 0 }]}]);

  function addSet(exerciseId){
    let newArr = [...exercises];
    const index = newArr.findIndex((element) =>element.id===exerciseId);
    newArr[index].sets.push({setId:uuid(),lbs:0,reps:0})
    setExercises(newArr)
  }
  function removeSet(exerciseId,id){
    let newArr = [...exercises];
    const index = newArr.findIndex((element) =>element.id===exerciseId);
    const setIndex = newArr[index].sets.findIndex((element)=>element.setId ===id)
    newArr[index].sets.splice(setIndex,1);
    setExercises(newArr)
  }
  function changeLbs(exerciseId,id,value){
    let newArr = [...exercises];
    const index = newArr.findIndex((element) =>element.id===exerciseId);
    const setIndex = newArr[index].sets.findIndex((element)=>element.setId ===id)
    newArr[index].sets[setIndex] = {...newArr[index].sets[setIndex],lbs:value}
    console.log(newArr[index].sets[setIndex], id)
    setExercises(newArr)
  }
  function changeReps(exerciseId,id,value){
    let newArr = [...exercises];
    const index = newArr.findIndex((element) =>element.id===exerciseId);
    const setIndex = newArr[index].sets.findIndex((element)=>element.setId ===id)
    newArr[index].sets[setIndex] = {...newArr[index].sets[setIndex],reps:value}
    console.log(newArr[index].sets[setIndex], id)
    setExercises(newArr)
  }
  function removeExercise(id) {
    setExercises(exercises.filter((exercise) => id !== exercise.id));
  }
  function changeName(id, value) {
    let newArr = [...exercises];
    const index = newArr.findIndex((element) => element.id === id);
    newArr[index] = {...newArr[index], id: id, name: value };
    setExercises(newArr);
  }
  
  function handleClick() {
    setExercises([
      ...exercises,
      { id: uuid(), name: `Exercise ${exercises.length + 1}`,sets:[{ id:uuid(),lbs: 0, reps: 0 }] },
    ]);
  }
  
  useEffect(() => {
    const storageExercises = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storageExercises) {
      setExercises(storageExercises);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(exercises));
  }, [exercises]);

  return (
    <div className='exerciseList'>
      {exercises.map((exercise) => {
        return (
          <>
            <Exercise
              key={exercise.id}
              id={exercise.id}
              name={exercise.name}
              removeExercise={removeExercise}
              changeName={changeName}
              sets={exercise.sets}
              addSet={addSet}
              removeSet={removeSet}
              changeLbs={changeLbs}
              changeReps={changeReps}
            />
          </>
        );
      })}
      <br />
      <Button variant='contained'onClick={handleClick}>Add Exercise</Button>
    </div>
  );
}

export default ExerciseList;
