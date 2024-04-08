import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/page1";
import Page2 from "./Pages/page2";
import AddPostForm from "./components/PostsForm";
import { useReducer } from "react";

const initialState = {
  posts: [],
};

const PostReducer = (state, action) => {
  switch (action.type) {
    case "Add_Post":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(PostReducer, initialState);

  return (
    <>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to={"/page2"}
      >
        Page2
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to={"/addPost"}
      >
        Add Post
      </NavLink>

      <Routes>
        <Route path={"/"} element={<Page1 posts={state.posts} />} />
        <Route path={"/page2"} element={<Page2 />} />
        <Route
          path={"/addPost"}
          element={<AddPostForm dispatch={dispatch} />}
        />
      </Routes>
    </>
  );
}

export default App;
