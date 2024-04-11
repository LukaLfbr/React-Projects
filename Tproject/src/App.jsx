import React from "react";
import { Provider } from "react-redux";
import PostList from "./components/PostList";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Data from JSON</h1>
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
