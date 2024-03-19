import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center space-x-3 bottom-10 inset-x-1 px-2">
          <button
            onClick={() => setColor("Red")}
            className="flex flex-wrap justify-center shadow-lg px-3 py-2 rounded-3xl text-white border"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl text-white border"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl text-white border"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl text-white border"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl text-white border"
            style={{ backgroundColor: "gray" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl border border-white"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl border border-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl text-white border"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Lavender")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl border-white border"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("White")}
            className="flex flex-wrap justify-center gap-5 shadow-lg px-3 py-2 rounded-3xl border"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
