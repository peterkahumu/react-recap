import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [error, setError] = useState()

  const fetchUsers = async () => {
    setLoading(true)
    try {
      // fetch fake user data
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!response.ok) setError(response.statusText || "Something went wrong.")
      const data = await response.json()
      if (!data.length) setError("No users to render.")
      // assign response to users variable
      setUsers(data)

    } catch (error) {
      setError(error.message || "Failed to fetch the data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  if (loading) {
    return (
      <main className="loading">
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWt6Mm1lNzJud2I1anhzNGRla2dyMDRkZ3B4OGhlNXB0eWNidXcyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11ASZtb7vdJagM/giphy.gif" alt="Loading..." />
      </main>)
  }
  if (error) return <main className="error">⚠️ {error}</main>
  return (
    <main>
      <h1>List of Users</h1>
      <div className="users-container">
        {
          users.map(user => (
            <ProfileCard key={user.id} user={user} />
          ))
        }
      </div>
    </main>
  )
}

export default App;