import React from 'react';
import styles from "./UserList.module.css"
import Card from '../../UI/Card';

const UserList = (props) => {
	return (
		<ul className={styles.userList}>
			{props.users && props.users.map(item =>
				<li className={styles.userList__li}
					key={item.id}>
					<Card>
						{item.name} ({item.age} years old)
					</Card>
				</li>)}
		</ul>
	);
}

export default UserList;