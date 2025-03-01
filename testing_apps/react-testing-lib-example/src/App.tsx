import './App.css'
import Users from './users/Users';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <div className='navigation'>
        <Link to="/" data-testid="home-page-link">Home</Link>
        <Link to="/users" data-testid="users-page-link">Users</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </>
  )
}

export default App
