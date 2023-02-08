import styles from "./Header.module.css"
import mealsImage from "../../assets/meals.jpg"
import CartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<CartButton />
			</header>
			<div className={styles['main-image']}>
				<img src={mealsImage} alt="header image" />
			</div>
		</>
	);
}

export default Header;