import { Outlet } from 'react-router-dom';
import EventsNavigation from "../components/EventsNavigation"

function EventsLayout() {
	return (
		<>
			<EventsNavigation />
			<section>
				<Outlet />
			</section>
		</>
	);
}

export default EventsLayout;