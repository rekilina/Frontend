import { redirect } from 'react-router-dom';

export function action() {
	console.log('lofout');
	localStorage.removeItem('token');
	return redirect("/");
}