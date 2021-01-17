import React, { useState } from "react";
import Exercise from "./Exercise";
import { v4 as uuid } from "uuid";

function ExerciseList() {
  let [exercises, setExercises] = useState([
    { id: uuid(), name: `Exercise 1` },
  ]);
  function removeExercise(id) {
    setExercises(exercises.filter((exercise) => id !== exercise.id));
  }

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
            />
          </>
        );
      })}
      <br />
      <button
        onClick={() =>
          setExercises([
            ...exercises,
            { id: uuid(), name: `Exercise ${exercises.length + 1}` },
          ])
        }
      >
        Add Exercise
      </button>
    </>
  );
}

export default ExerciseList;
