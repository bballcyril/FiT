import "./App.css";
import ExerciseList from "./components/ExerciseList";
import Timer from "./components/Timer";
function App() {

  return (
    <div className="App">
      <Timer/>
      <ExerciseList/>
    </div>
  );
}

export default App;
