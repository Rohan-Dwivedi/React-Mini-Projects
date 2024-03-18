import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("You can't go Above than 20");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("You Can't go Less than 0");
    }
  };

  return (
    <>
      <h2>Counting Application</h2>
      <h4>Count : {counter}</h4>

      <button onClick={addValue}>ADD</button>
      <br />
      <button onClick={removeValue}>REMOVE</button>
    </>
  );
}

export default App;
