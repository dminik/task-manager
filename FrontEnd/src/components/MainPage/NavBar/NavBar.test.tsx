import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { NavBar } from './NavBar';

describe('NavBar component', () => {
  it('renders links with correct labels and hrefs', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/events" element={<div>Events</div>} />
            <Route path="/venues" element={<div>Venues & Locations</div>} />
            <Route path="/transactions" element={<div>Transactions</div>} />
            <Route path="/sponsors" element={<div>Sponsors</div>} />
            <Route path="/help" element={<div>Help</div>} />
          </Routes>
            <NavBar collapsed={false} onToggleNavbar={() => {}}/>
        </MemoryRouter>
      </MantineProvider>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(7);
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[0]).toHaveTextContent('Home');
    expect(links[1]).toHaveAttribute('href', '/events');
    expect(links[1]).toHaveTextContent('Events');
    expect(links[2]).toHaveAttribute('href', '/venues');
    expect(links[2]).toHaveTextContent('Venues & Locations');
    expect(links[3]).toHaveAttribute('href', '/transactions');
    expect(links[3]).toHaveTextContent('Transactions');
    expect(links[4]).toHaveAttribute('href', '/sponsors');
    expect(links[4]).toHaveTextContent('Sponsors');
    expect(links[5]).toHaveAttribute('href', '/help');
    expect(links[5]).toHaveTextContent('Help');
    expect(links[6]).toHaveAttribute('href', '/');
    expect(links[6]).toHaveTextContent('Collapse');
  });

  it('navigates to correct routes when links are clicked', async () => {
    const routes = [
      { path: '/', elementText: 'Home' },
      { path: '/events', elementText: 'Events' },
      { path: '/venues', elementText: 'Venues & Locations' },
      { path: '/transactions', elementText: 'Transactions' },
      { path: '/sponsors', elementText: 'Sponsors' },
      { path: '/help', elementText: 'Help' },
    ];

    render(
      <MantineProvider>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={<div>{route.elementText}</div>} />
            ))}
          </Routes>
          <NavBar collapsed={false} onToggleNavbar={() => {}}/>
        </MemoryRouter>
      </MantineProvider>
    );

    const links = screen.getAllByRole('link');

    for (let i = 0; i < routes.length; i++) {
      const link = links[i];
      const route = routes[i];

      // Manually change the `initialEntries` of the `MemoryRouter` to the path of the clicked link
      fireEvent.click(link);
      render(
        <MantineProvider>
          <MemoryRouter initialEntries={[route.path]}>
            <Routes>
              <Route path={route.path} element={<div>{route.elementText}</div>} />
            </Routes>
          </MemoryRouter>
        </MantineProvider>
      );

      // Check for the rendered element after navigation
      await waitFor(() => {
        expect(screen.getAllByText(route.elementText)[0]).toBeInTheDocument();
      });
    }
  });
});
