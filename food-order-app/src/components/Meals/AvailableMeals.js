import styles from "./AvailableMeals.module.css"
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem'
import useHTTP from '../../hooks/use-HTTP';
import { useState, useEffect } from 'react';

const AvailableMeals = (props) => {

	const [meals, setMeals] = useState([]);

	const { isLoading: isLoading,
		error: error,
		sendRequest: fetchData } = useHTTP();

	useEffect(() => {
		const applyData = (data) => {
			const loadedMeals = [];

			for (const mealKey in data) {
				loadedMeals.push({
					id: mealKey,
					name: data[mealKey].name,
					description: data[mealKey].description,
					price: data[mealKey].price,
				});
			}

			setMeals(loadedMeals);
		};

		fetchData({ url: 'https://react-http-tests-5c0a0-default-rtdb.firebaseio.com/meals.json' },
			applyData);
	}, [fetchData]);

	if (isLoading) {
		return (
			<section className={styles.meals}>
				<Card>
					<p>Loading...</p>
				</Card>
			</section>
		);
	}
	if (error) {
		return (
			<section className={styles.meals}>
				<Card>
					<p>An Error occured... {error}</p>
				</Card>
			</section>
		);
	}

	const mealsList = meals.map((item) => {
		return (<MealItem
			id={item.id}
			key={item.id}
			name={item.name}
			description={item.description}
			price={item.price}
		/>);
	});

	return <section className={styles.meals}>
		<Card>
			<ul>
				{mealsList}
			</ul>
		</Card>
	</section>;
}

export default AvailableMeals;