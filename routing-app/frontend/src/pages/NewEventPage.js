import EventForm from '../components/EventForm';

function NewEventPage() {
	return <EventForm method="post" event={{
		title: 'new event',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1024px-Stray_kitten_Rambo002.jpg',
		description: 'event description',
		date: '2023-03-01'
	}} />
}

export default NewEventPage;
