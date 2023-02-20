import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import EditEventPage from './pages/EditEventPage'
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetailPage'
import NewEventPage from './pages/NewEventPage'
import HomePage from './pages/HomePage'
import EventsPage, { eventsLoader } from './pages/EventsPage'
import RootLayout from './pages/RootLayout';
import EventsLayout from './pages/EventsLayout'
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import { action as deleteEventAction } from './pages/EventDetailPage';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <EventsLayout />,
          children: [
            { path: '', element: <EventsPage />, loader: eventsLoader },
            {
              path: ':eventId',
              id: 'event-detail',
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction
                },
                {
                  path: 'edit',
                  element: <EditEventPage />,
                  action: manipulateEventAction
                }
              ]
            },
            {
              path: 'new',
              element: <NewEventPage />,
              action: manipulateEventAction
            }
          ]
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
