import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './AppRouter'

function App() {
  return (
    <>
      <div className='navigation'>
        <Link to="/" data-testid="home-page-link">Home</Link>
        <Link to="/users" data-testid="users-page-link">Users</Link>
      </div>
      <AppRouter />
    </>
  )
}

export default App
