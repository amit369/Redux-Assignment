import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/PostActions";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div className="card" key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.message}</p>
      <button
        className="btn editBtn"
      >
        Edit
      </button>
      <button
        className="btn deleteBtn"

      >
        Delete
      </button>
    </div>
  );
};
export default Post;
