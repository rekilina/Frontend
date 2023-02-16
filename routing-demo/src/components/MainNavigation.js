import { NavLink } from 'react-router-dom';
import classes from "./MainNavigation.module.css"

function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink to="/" end className={({ isActive }) =>
							isActive ? classes.active : ''}>Home</NavLink>
					</li>
					<li>
						<NavLink to="/products" className={({ isActive }) =>
							isActive ? classes.active : ''}>Products</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;