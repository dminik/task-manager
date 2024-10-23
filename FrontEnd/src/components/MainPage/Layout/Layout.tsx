import { AppShell } from '@mantine/core';
import { IconLayoutSidebarLeftCollapse } from '@tabler/icons-react';
import { Header } from '../Header/Header';
import { NavLayout } from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import classes from './Layout.module.css';

export function Layout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >

      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar className={classes.navbar}>
        <IconLayoutSidebarLeftCollapse
          onClick={toggleDesktop}
          size={24}
          stroke={0.7}
          className={`${classes.icon} ${!desktopOpened ? classes['icon-rotated'] : ''}`}
        />

        <div className={classes['nav-content']}>
          <NavLayout />
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
