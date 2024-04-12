import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PostData from "./components/PostData";
import AddPost from "./components/AddPost";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<PostData />} />
            <Route path="/add-post" element={<AddPost />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
