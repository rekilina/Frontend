import { useNavigate } from 'react-router-dom';


function HomePage() {
	const navigate = useNavigate();

	function navigateHandler() {
		navigate('/products');
	}

	return <>
		<h1>My HomePage</h1>
		<p>
			<button onClick={navigateHandler}>Navigate</button>
		</p>
	</>
}

export default HomePage;