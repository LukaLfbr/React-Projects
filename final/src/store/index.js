import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import commentsReducer from "./slices/commentsSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
