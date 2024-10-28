import { useState } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';

export default {
  title: 'NavBar',
};

export const Usage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/events" element={<div>Events</div>} />
        <Route path="/venues" element={<div>Venues & Locations</div>} />
        <Route path="/transactions" element={<div>Transactions</div>} />
        <Route path="/sponsors" element={<div>Sponsors</div>} />
        <Route path="/help" element={<div>Help</div>} />
      </Routes>
      <NavBar collapsed={collapsed} onToggleNavbar={toggleNavbar} />
    </MemoryRouter>
  );
};
