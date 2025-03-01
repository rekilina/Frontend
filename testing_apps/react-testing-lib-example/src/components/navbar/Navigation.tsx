import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className='navigation'>
			<Link to="/" data-testid="home-page-link">Home</Link>
			<Link to="/users" data-testid="users-page-link">Users</Link>
		</div>
	)
}

export default Navigation