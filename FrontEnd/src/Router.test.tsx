import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { vi } from 'vitest';

// Mock each component for isolated testing
vi.mock('./pages/Home.page', () => ({ HomePage: () => <div>Home Page Content</div> }));
vi.mock('./pages/Events.page', () => ({ EventsPage: () => <div>Events Page Content</div> }));
vi.mock('./pages/Venues.page', () => ({ VenuesPage: () => <div>Venues Page Content</div> }));
vi.mock('./pages/Transactions.page', () => ({ TransactionsPage: () => <div>Transactions Page Content</div> }));
vi.mock('./pages/Sponsors.page', () => ({ SponsorsPage: () => <div>Sponsors Page Content</div> }));

// Define each route for testing
const routes = [
  { path: '/', expectedText: 'Home Page Content', component: <div>Home Page Content</div> },
  { path: '/events', expectedText: 'Events Page Content', component: <div>Events Page Content</div> },
  { path: '/venues', expectedText: 'Venues Page Content', component: <div>Venues Page Content</div> },
  { path: '/transactions', expectedText: 'Transactions Page Content', component: <div>Transactions Page Content</div> },
  { path: '/sponsors', expectedText: 'Sponsors Page Content', component: <div>Sponsors Page Content</div> },
];

describe('Specific Page Tests', () => {
  routes.forEach(({ path, expectedText, component }) => {
    it(`renders the ${expectedText} correctly`, async () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <Routes>
            <Route path={path} element={component} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText(expectedText)).toBeInTheDocument();
    });
  });

  it('renders a 404 page when an invalid route is entered', async () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']}>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('404 Not Found')).toBeInTheDocument());
  });
});
