import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import { v4 as uuid } from "uuid";
import {Button} from "@material-ui/core"

const LOCAL_STORAGE_KEY = "exerciseList";
function ExerciseList() {
  let [exercises, setExercises] = useState([
    { id: uuid(), name: `Exercise 1`, sets: [{ lbs: 0, reps: 0 }] },
  ]);

  function removeExercise(id) {
    setExercises(exercises.filter((exercise) => id !== exercise.id));
  }
  function changeName(id, value) {
    let newArr = [...exercises];
    const index = newArr.findIndex((element) => element.id === id);
    newArr[index] = { id: id, name: value };
    setExercises(newArr);
  }
  function changeSets(id, value) {
    let newArr = [...exercises];
    const index = newArr.findIndex((element) => element.id === id);
    newArr[index] = { ...newArr[index], sets: value };
    setExercises(newArr);
  }
  function handleClick() {
    setExercises([
      ...exercises,
      { id: uuid(), name: `Exercise ${exercises.length + 1}` },
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
    <>
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
              changeSets={changeSets}
            />
          </>
        );
      })}
      <br />
      <Button variant='contained'onClick={handleClick}>Add Exercise</Button>
    </>
  );
}

export default ExerciseList;
