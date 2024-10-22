import {  AppShell,  } from '@mantine/core';
import { Header } from '../Header/Header';
import { NavLayout } from '../NavBar/NavBar';

export function Layout() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 0 }}>
      <AppShell.Navbar>
        <NavLayout />
      </AppShell.Navbar>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
    </AppShell>
  );
}