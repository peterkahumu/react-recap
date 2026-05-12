import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import NewPostForm from "./forms/NewPost";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!response.ok) setError(response.statusText);
      const data = await response.json()
      console.log(data)
      setPosts(data)
    } catch (error) {
      setError(error.message || "Failed to fetch you data.")
    } finally {
      setLoading(false)
    }
  }

  const createPost = (post) => {
    setPosts((previousPosts) => [
      {id: Date.now(), ...post},
      ...previousPosts
    ])
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) return <p>Loading Posts...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="app-container">
      <NewPostForm createPost={createPost} />
      <h1>Hello there</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
      <div className="button-container">
      </div>
    </div>
  );
};

export default App;