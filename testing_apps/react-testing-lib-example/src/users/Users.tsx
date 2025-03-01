import axios from 'axios';
import { useEffect, useState } from 'react'
import './Users.css'

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
		<ul
			className='user-ul'
			data-testid="user-list">
			{
				users.map(user => (
					<li
						key={user.id}
						data-testid="user-item"
						className='user-li'>
						{user.name}
					</li>))
			}
		</ul>
	)
}

export default Users