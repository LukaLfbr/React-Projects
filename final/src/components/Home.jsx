import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../store/slices/postsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts); //probleme sur l'ajout 🔴🔴🔴🔴🔴🔴🔴🔴

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/add-post">Add New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>By: {post.userId}</p>
            <Link to={`/post/${post.id}`}>See post</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
