import React from "react";
import { useSelector } from "react-redux";

const AllUser = () => {
  const posts = useSelector(state => state.postReducer);
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
            <Post key={post.id} post={post} />
          )}
        </div>
      ))}
    </div>
  );
};
export default AllUser;
