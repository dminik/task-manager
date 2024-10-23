import { IconLayoutSidebarLeftCollapse } from '@tabler/icons-react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { NavLayout } from '../NavBar/NavBar';
import { useState } from 'react';

export function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <AppShell
      header={{ height: 40 }}
      navbar={{
        width: collapsed ? 90 : 300,
        breakpoint: 'sm',
      }}
      footer={{ height: 40 }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar>
        <NavLayout collapsed={collapsed} onToggleNavbar={toggleNavbar} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
