import { useEffect, useState } from 'react'
import './App.css'
import Users from './users/Users';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <BrowserRouter>
      <div className='navigation'>
        <Link to="/" data-testid="home-page-link">Home</Link>
        <Link to="/users" data-testid="users-page-link">Users</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
