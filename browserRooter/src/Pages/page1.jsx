import React from "react";

const Page1 = ({ posts }) => {
  return (
    <div>
      <p>Ici sur Home</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            Title ={post.title} <br /> Description = {post.content}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page1;
