import { useCallback, useEffect, useState } from "react";

function App() {
  //Length of Password
  const [length, setLength] = useState(8);
  //Numbers Allowed in Password
  const [numAllowed, setNumAllowed] = useState(false);
  //Character allowed in Password
  const [charAllowed, setCharAllowed] = useState(false);
  //Creating Password Container
  const [password, setPassword] = useState("");

  //Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*(){}[]_-=+~`";
    }

    for (let i = 1; i <= length; i++) {
      //here random password is generated
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  //use of useEffect hook

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="text-center mt-6 text-3xl">
        <h3>Password Generator</h3>
      </div>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-3 mt-20 text-orange-300 bg-gray-700 shadow-orange-600">
        <div className="text-center my-3">Generate password here:</div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
          />

          <button className="outline-none bg-blue-600 text-white px-3 py-0.8 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={36}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
