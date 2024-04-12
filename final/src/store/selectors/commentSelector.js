import { createSelector } from "@reduxjs/toolkit";

export const selectComments = (state) => state.comments.comments;

export const selectCommentsByPostId = (postId) =>
  createSelector(selectComments, (comments) =>
    comments.filter((comment) => comment.postId === postId)
  );
