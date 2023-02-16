import { Link } from 'react-router-dom';


function HomePage() {
	return <>
		<h1>My HomePage</h1>
		<Link to="/products">link to products page</Link>
	</>
}

export default HomePage;