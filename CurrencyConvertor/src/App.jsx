import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center text-3xl bg-fuchsia-400 rounded-lg p-1">
        Hello
      </div>
    </>
  );
}

export default App;
