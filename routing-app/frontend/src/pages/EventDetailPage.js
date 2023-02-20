import { Suspense } from 'react';
import { json, redirect, useRouteLoaderData, defer, Await } from 'react-router-dom';
import EventItem from "../components/EventItem"
import EventsList from '../components/EventsList';

function EventDetailPage() {
	const { event, events } = useRouteLoaderData('event-detail');

	return (
		<>
			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading event data...</p>}>
				<Await resolve={event}>
					{(eventLoaderData) => {
						return <EventItem event={eventLoaderData.event} />
					}}
				</Await>
			</Suspense>
			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading events data...</p>}>
				<Await resolve={events}>
					{(eventsLoaderData) => {
						return <EventsList events={eventsLoaderData} />
					}}
				</Await>
			</Suspense>
		</>
	);
}

export default EventDetailPage;

async function loadEvent(id) {
	const response = await fetch('http://localhost:8080/events/' + id);
	if (!response.ok) {
		throw json(
			{ message: "Could not fetch details for selected event" },
			{ status: 500 });
	} else {
		const resData = await response.json();
		return resData;
	}
}

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

export async function loader({ request, params }) {
	const id = params.eventId;
	return defer({
		event: await loadEvent(id),
		events: loadEvents()
	});
}

export async function action({ request, params }) {
	const eventId = params.eventId;

	const response = await fetch('http://localhost:8080/events/' + eventId,
		{
			method: request.method  // or just method: 'delete'
		});
	if (!response.ok) {
		console.log(response);
		throw json(
			{ message: "Could not delete event" },
			{ status: 500 });
	} else {
		return redirect('/events');
	}
}