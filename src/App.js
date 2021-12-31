import "./App.css";
import ImutablState from "./components/ImutablState";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";

function App() {
  return (
    <div className="App">
      <UseReducer></UseReducer>
      <ImutablState></ImutablState>
    </div>
  );
}

export default App;
