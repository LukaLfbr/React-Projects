import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/page1";
import Page2 from "./Pages/page2";

function App() {
  return (
    <>
      <Link to={"/"}>Page1</Link>
      <Link to={"/page2"}>Page2</Link>

      <Routes>
        <Route path={"/"} element={<Page1 />} />

        <Route path={"/page2"} element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;
