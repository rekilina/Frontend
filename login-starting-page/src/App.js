import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext, { AuthContextProvider } from './store/auth-content';

function App() {

  const ctx = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <MainHeader isAuthenticated={ctx.isLogged} />
      <main>
        {!ctx.isLogged && <Login onLogin={ctx.loginHandler} />}
        {ctx.isLogged && <Home />}
      </main>
    </AuthContextProvider >
  );
}

export default App;
