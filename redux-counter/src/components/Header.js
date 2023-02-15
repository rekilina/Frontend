import classes from './Header.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const logOutHandler = (event) => {
    dispatch(authActions.logout());
  }

  const navItems = (
    <nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button type="button" onClick={logOutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth.isAuthenticated && navItems}
    </header>
  );
};

export default Header;
