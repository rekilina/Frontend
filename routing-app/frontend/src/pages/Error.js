import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import PageContent from "./PageContent"

function ErrorPage() {
	const error = useRouteError();
	// const title = JSON.parse(error.data).message;
	const title = error.data.message;

	return <>
		<MainNavigation />
		<PageContent title={title}> Status: {error.status} </PageContent >;
	</>
}

export default ErrorPage;