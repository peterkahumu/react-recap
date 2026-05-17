import React from "react";
import Post from "./components/Post";
import "./App.css";

const PostList = ({ posts, loading, error }) => {

  if (loading) return <p>Loading Posts...</p>

  return (
    <div className="app-container">
      {error &&
        <div className="error-banner">{error}</div>
      }
      <div className="posts-grid">
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default PostList;