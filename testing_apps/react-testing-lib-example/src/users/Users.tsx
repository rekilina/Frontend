import axios from 'axios';
import { useEffect, useState } from 'react'
import './Users.css'
import { Link } from 'react-router-dom';

type User = {
	id: number;
	name: string;
}

const Users = () => {
	const [users, setUsers] = useState<User[]>([]);

	const loadUsers = async () => {
		const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(resp.data);
	}

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<div
			className='user-ul'
			data-testid="user-list">
			{
				users.map(user => (
					<li
						key={user.id}
						data-testid="user-item"
						className='user-li'>
						<Link
							to={`/users/${user.id}`}>
							{user.name}
						</Link>
					</li>))
			}
		</div>
	)
}

export default Users