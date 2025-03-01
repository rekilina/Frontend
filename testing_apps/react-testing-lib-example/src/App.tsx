import './App.css'
import Users from './users/Users';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import User from './users/User';

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
        <Route path={`/users/:id`} element={<User/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
