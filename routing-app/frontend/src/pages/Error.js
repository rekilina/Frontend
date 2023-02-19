import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import PageContent from "./PageContent"

function ErrorPage() {
	const error = useRouteError();
	// const title = JSON.parse(error.data).message;
	const title = error.data ? error.data.message : '';
	console.log(error);
	return <>
		<MainNavigation />
		<PageContent title={title ? title : 'Error'}> Status: {error.status} </PageContent >;
	</>
}

export default ErrorPage;