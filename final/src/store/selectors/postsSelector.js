import { createSelector } from "@reduxjs/toolkit";

export const selectPosts = (state) => state.posts.posts;

export const selectPostById = (postId) =>
  createSelector(selectPosts, (posts) =>
    posts.find((post) => post.id === postId)
  );
