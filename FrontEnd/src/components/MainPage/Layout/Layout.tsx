import { AppShell, } from '@mantine/core';
import { Header } from '../Header/Header';
import { NavLayout } from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 0 }}>

      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar>
        <NavLayout />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet /> {/* This is where the page content will be rendered */}
      </AppShell.Main>

    </AppShell>
  );
}