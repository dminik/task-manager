import { MemoryRouter } from 'react-router-dom';
import { NavBar } from './NavBar';
import { useState } from 'react';

export default {
  title: 'NavBar',
};

export const Usage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <MemoryRouter>
      <NavBar collapsed={collapsed} onToggleNavbar={toggleNavbar} />
    </MemoryRouter>
  );
};