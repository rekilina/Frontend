import { Link } from 'react-router-dom';

const DUMMY_PRODUCTS = [
	{ id: 'p1', title: 'Product-1' },
	{ id: 'p2', title: 'Product-2' },
	{ id: 'p3', title: 'Product-3' }
];

function ProductsPage() {
	return <>
		<h1>My ProductsPage</h1>
		<ul>
			{DUMMY_PRODUCTS.map(prod => (
				<li key={prod.id}>
					<Link to={prod.id}>{prod.title}</Link>
				</li>
			))}
		</ul>
	</>
}

export default ProductsPage;