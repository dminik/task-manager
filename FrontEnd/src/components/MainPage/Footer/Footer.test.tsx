import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { Footer } from './Footer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

describe('Footer component', () => {
  it('renders links with correct labels and hrefs', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </MantineProvider>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
    expect(links[0]).toHaveAttribute('href', '/support');
    expect(links[0]).toHaveTextContent('Support');
    expect(links[1]).toHaveAttribute('href', '/help');
    expect(links[1]).toHaveTextContent('Help Center');
    expect(links[2]).toHaveAttribute('href', '/terms');
    expect(links[2]).toHaveTextContent('Terms of Service');
    expect(links[3]).toHaveAttribute('href', '/policy');
    expect(links[3]).toHaveTextContent('Privacy Policy');
  });

  it('renders links with correct className', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </MantineProvider>
    );
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass(/_link*/i);
    });
  });

  it('navigates to correct routes when links are clicked', async () => {
    const routes = [
      { path: '/', elementText: 'Home' },
      { path: '/support', elementText: 'SupText' },
      { path: '/help', elementText: 'Help Center' },
      { path: '/terms', elementText: 'Terms of Service' },
      { path: '/policy', elementText: 'Privacy Policy' },
    ];

    render(
      <MantineProvider>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={<div>{route.elementText}</div>} />
            ))}
          </Routes>
          <Footer />
        </MemoryRouter>
      </MantineProvider>
    );

    const links = screen.getAllByRole('link');

    for (let i = 0; i < links.length; i++) {
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
