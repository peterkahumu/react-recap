# Users Display - React Recap Project

A responsive React application that fetches and displays user profiles from the JSONPlaceholder API. This project demonstrates core React concepts including hooks, API fetching, state management, and component composition.

## Features

- 🎣 **Fetch data from REST API** — Uses `jsonplaceholder.typicode.com/users` endpoint
- 📱 **Responsive grid layout** — Adapts number of columns based on screen size
- 💾 **State management** — Loading, error, and data states with `useState`
- ⚡ **Side effects** — API calls on mount with `useEffect`
- 🎨 **Styled components** — CSS modules with hover effects and animations
- ♿ **Semantic HTML** — Accessible markup with proper heading hierarchy and `<address>` tags
- 🔗 **Interactive links** — Email, phone, and website links for better UX
- 🎬 **Loading state** — GIF animation while fetching data

## React Concepts Demonstrated

### 1. **Hooks**
- `useState` — Store loading, error, and users state
- `useEffect` — Fetch data on component mount (empty dependency array `[]`)

### 2. **Component Lifecycle**
```javascript
useEffect(() => {
  fetchPosts(); // Runs once after mount
}, []) // Empty deps = mount only
```

### 3. **State Updates & Rendering**
```javascript
const [users, setUsers] = useState([]) // Initial state = empty array
// Later: setUsers(data) triggers re-render with new data
```

### 4. **Conditional Rendering**
```javascript
if (loading) return {loading gif} // a gif is rendered here.
if (error) return <p>⚠️: {error}</p>
return <div>Content</div>
```

### 5. **List Rendering with .map()**
```javascript
{users.map(user => (
  <ProfileCard key={user.id} user={user} />
))}
```

### 6. **Props & Component Composition**
- `App` fetches data, passes entire `user` object to `ProfileCard`
- `ProfileCard` destructures and displays user details

### 7. **Error Handling**
```javascript
try {
  const data = await response.json()
  setUsers(data)
} catch (error) {
  setError(error.message)
} finally {
  setLoading(false) // Always run
}
```

### 8. **Deterministic Logic**
```javascript
// Gender selection based on ID (consistent, not random)
const getGender = (id) => id % 2 === 0 ? genders[0] : genders[1]
```

## Project Structure

```
src/
├── App.jsx                 # Main component (fetch logic, layout)
├── App.css                 # Layout styles (grid, loading, error)
├── components/
│   ├── ProfileCard.jsx     # Profile card component
│   └── ProfileCard.css     # Card styles (hover, avatar, sections)
├── assets/
│   ├── man.png            # Male profile image
│   └── woman.png          # Female profile image
└── main.jsx               # React entry point
```

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

### Build for production
```bash
npm run build
```

## How It Works

1. **Component Mounts** → `useEffect` triggers
2. **Fetch starts** → `loading = true`, display spinner GIF
3. **Data arrives** → `setUsers(data)`, `setLoading(false)`
4. **Render users** → Map over array, create `ProfileCard` for each
5. **User interaction** → Click email/phone/website links (opens mail client, dialer, browser)

## Key Learnings

| Concept | Example |
|---------|---------|
| **Dependency Array** | `useEffect(fn, [])` = run once on mount |
| **State Updates** | `setLoading(false)` triggers re-render |
| **Conditional Render** | `if (loading) return <gif>` |
| **Array Mapping** | `users.map(u => <Card key={u.id} user={u} />)` |
| **Error Handling** | Catch in `try/catch`, store in state |
| **Finally Block** | Always runs, great for cleanup (`setLoading(false)`) |

## Resources

- [React Hooks Documentation](https://react.dev/reference/react)
- [useEffect Guide](https://react.dev/reference/react/useEffect)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

