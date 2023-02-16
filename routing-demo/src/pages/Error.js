import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
	return (
		<>
			<MainNavigation />
			<main>
				<h1>An Error occured!</h1>
				<p>Couldn't find page</p>
			</main>
		</>
	);
}

export default ErrorPage;