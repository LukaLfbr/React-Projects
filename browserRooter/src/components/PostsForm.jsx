import React, { useState } from "react";

const AddPostForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title,
        content,
      },
    });
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="submit">Add Post</button>
        </form>
      </div>
    </>
  );
};

export default AddPostForm;
