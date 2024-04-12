import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../store/slices/postsSlice";
import { fetchCommentsByPostId } from "../store/slices/commentsSlice";

const PostData = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(fetchPostById(postId));
    dispatch(fetchCommentsByPostId(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <h1 style={{ color: "green" }}>
        <u>{post.title}</u>
      </h1>
      <p style={{ color: "yellow" }}>
        <strong>Description:</strong> <br /> {post.body}
      </p>
      <p>Created by: {post.userId}</p>
      <h3 style={{ color: "red" }}> Comments :</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.body}</p>
            <p>By: {comment.name}</p>
          </li>
        ))}
      </ul>
      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default PostData;
