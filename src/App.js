import './App.css';
import Exercise from './components/Exercise';
import {useState} from 'react'



function App() {
 let [exercises,setExercises] = useState([{id:1,name:`Exercise 1`}])

  return (
    <div className="App">
      {exercises.map((exercise) =>{
        return <Exercise name = {exercise.name}/>
      })}
      <button onClick = {() => setExercises([...exercises,{id:2,name: '2'}])}>Add Exercise</button>
    </div>
  );
}

export default App;
