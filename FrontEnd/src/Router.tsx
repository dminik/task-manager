import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Layout } from './components/MainPage/Layout/Layout';
import { EventsPage } from './pages/Events.page';
import { VenuesPage } from './pages/Venues.page';
import { TransactionsPage } from './pages/Transactions.page';
import { SponsorsPage } from './pages/Sponsors.page';

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
        path: 'events',
        Component: EventsPage,
      },
      {
        path: 'venues',
        Component: VenuesPage,
      },
      {
        path: 'transactions',
        Component: TransactionsPage,
      },
      {
        path: 'sponsors',
        Component: SponsorsPage,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
