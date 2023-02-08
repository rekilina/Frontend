import React, { useContext } from 'react';
import AuthContext from '../../store/auth-content';
import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    // takes a function as a child
    // <AuthContext.Consumer>
    //   {(ctx) => {
    // return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLogged && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLogged && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLogged && (
          <li>
            <button onClick={ctx.onLogOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
