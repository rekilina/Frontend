import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';

function EventsPage() {
	const { events } = useLoaderData();

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Await resolve={events}>
				{(loadedEventsData) => {
					return <EventsList events={loadedEventsData} />
				}}
			</Await>
		</Suspense>
	);
}

export default EventsPage;

async function loadEvents() {
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
		return resData.events;
	}
}

export function eventsLoader() {
	return defer({
		// key name is up to you
		events: loadEvents()
	});
}