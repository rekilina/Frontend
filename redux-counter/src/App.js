import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'

import { useSelector } from 'react-redux';


function App() {
  // in useSelector we use identifiers which we assigned in reducer map
  const auth = useSelector(state => state.auth);
  return (
    <>
      <Header />
      {!auth.isAuthenticated && <Auth />}
      {auth.isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
