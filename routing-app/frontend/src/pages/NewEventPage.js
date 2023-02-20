import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

function NewEventPage() {
	return <EventForm event={{
		title: 'new event',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1024px-Stray_kitten_Rambo002.jpg',
		description: 'event description',
		date: '2023-03-01'
	}} />
}

export default NewEventPage;

// we are still on the client side here
export async function action({ request, params }) {
	const data = await request.formData();
	const eventData = {
		title: data.get('title'),
		image: data.get('image'),
		description: data.get('description'),
		date: data.get('date'),
	};
	const response = await fetch('http://localhost:8080/events', {
		method: 'POST',
		body: JSON.stringify(eventData),
		headers: {
			'Content-Type': 'application/json'
		}
	}
	);
	if (response.status === 422) {
		// we can use returned action data
		// common for validation error responses
		// use hook useActionData() to use this data 
		// in the other component
		return response;
	}
	console.log(response);
	if (!response.ok) {
		console.log('here');
		throw json({ message: "Couldn't save event" }, { status: 500 });
	}
	return redirect('/events');
}