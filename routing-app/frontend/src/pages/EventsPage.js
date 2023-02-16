import { Link } from 'react-router-dom';

function EventsPage() {
	const DUMMY_EVENTS = [
		{ id: 'e1', title: 'Event-1' },
		{ id: 'e2', title: 'Event-2' },
		{ id: 'e3', title: 'Event-3' },
		{ id: 'e4', title: 'Event-4' },
	];
	return (
		<>
			<h1>EventsPage</h1>
			<h2>Just dummy page</h2>
			<ul>
				{DUMMY_EVENTS.map(ev => {
					return (
						<li key={ev.id}>
							<Link to={ev.id}>{ev.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default EventsPage;