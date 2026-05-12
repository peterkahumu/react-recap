import { useEffect, useState } from "react";
import PostList from "./PostList";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NewPostForm from "./forms/NewPost";
import "./App.css"

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleModalToggle = () => {
    setShowModal((previous) => !previous);
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(response.statusText || "Failed to fetch posts.");
      }
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (fetchError) {
      setError(fetchError.message || "Failed to fetch your data.");
    } finally {
      setLoading(false);
    }
  };

  const createPost = (post) => {
    setPosts((previousPosts) => [{ id: Date.now(), ...post }, ...previousPosts]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {showModal && (
        <Modal toggleModal={handleModalToggle}>
          <NewPostForm createPost={createPost} toggleModal={handleModalToggle} />
        </Modal>
      )}
      <Header toggleModal={handleModalToggle} />
      <PostList posts={posts} loading={loading} error={error} />
    </>
  )
}

export default App;