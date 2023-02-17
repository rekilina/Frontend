import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
	const data = useLoaderData();

	return (
		<>
			{<EventsList events={data.events} />}
		</>
	);
}

export default EventsPage;

export async function eventsLoader() {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		// return { isError: true, message: "Couldn't fetch events." }
		// throw new Response(
		// 	JSON.stringify({ message: "Couldn't fetch events." }),
		// 	{ status: 500 }
		// );
		throw json(
			{ message: "Couldn't fetch events." },
			{ status: 500 }
		);
	} else {
		const resData = await response.json();
		return resData;
	}
}