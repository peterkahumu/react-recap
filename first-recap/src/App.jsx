import { useEffect, useState } from "react";
import PostList from "./PostList";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NewPostForm from "./forms/NewPost";
import "./App.css"

// Dummy posts – both with guaranteed unique IDs
const getDummyPosts = () => [
  {
    id: crypto.randomUUID(),
    title: "This is a test",
    body: "This is the body of the dummy post."
  },
  {
    id: crypto.randomUUID(),
    title: "This is the second post",
    body: "This is a new body. Here another trial too."
  }
];

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleModalToggle = () => setShowModal(prev => !prev);

  const createPost = (newPost) => {
    setPosts(prev => [{ id: crypto.randomUUID(), ...newPost }, ...prev]);
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(response.statusText || "Failed to fetch posts.");
      }
      const data = await response.json();
      setPosts(data);
      // Success – no error, no fallback needed
    } catch (error) {
      setError(`${error.message}, rendering offline posts.` || "Error: Could not render live posts. Fallback to offline posts.");
      // Fallback to dummy posts
      setPosts(getDummyPosts());
    } finally {
      setLoading(false);
    }
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
  );
};

export default App;