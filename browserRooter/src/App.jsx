import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/page1";
import Page2 from "./Pages/page2";

function App() {
  return (
    <>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to={"/"}
      >
        Page1
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to={"/page2"}
      >
        Page2
      </NavLink>

      <Routes>
        <Route path={"/"} element={<Page1 />} />
        <Route path={"/page2"} element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;
