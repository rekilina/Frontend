import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext, { AuthContextProvider } from './store/auth-content';

function App() {

  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader isAuthenticated={ctx.isLogged} />
      <main>
        {!ctx.isLogged && <Login />}
        {ctx.isLogged && <Home />}
      </main>
    </ >
  );
}

export default App;
