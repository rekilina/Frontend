import EventForm from '../components/EventForm';

function NewEventPage() {
  return <EventForm method="post" event={{
    title: "New Event Title",
    image: "https://i.pinimg.com/736x/a5/d7/79/a5d77948a4e099dbc636cbc73fec3653.jpg",
    date: "2023-01-03",
    description: "New event description"
  }} />;
}

export default NewEventPage;

