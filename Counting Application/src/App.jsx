import { useState } from "react";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);
  let addValue = () => {
    if (Counter <= 19){
      setCounter(Counter + 1)
      console.log("clicked");
    }else{
      console.log("Out of Value");
    }
    
  };

  let removeValue = () => {
    setCounter(Counter - 1)
  };

  return (
    <>
      <h2>Counting Application</h2>
      <h4>Count:{Counter}</h4>

      <button onClick={addValue}>ADD</button>
      <br />
      <button onClick={removeValue}>REMOVE</button>
    </>
  );
}

export default App;
