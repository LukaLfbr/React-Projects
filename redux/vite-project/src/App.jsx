import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </>
  );
}

export default App;
