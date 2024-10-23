import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Layout } from './components/MainPage/Layout/Layout';
import { EventsPage } from './pages/Events.page';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout, // Use Layout as the wrapper
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'events', // Nested About page
        Component: EventsPage,
      },
      // {
      //   path: 'contact', // Nested Contact page
      //   element: <ContactPage />,
      // },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
