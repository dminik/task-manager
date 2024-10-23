import { IconLayoutSidebarLeftCollapse } from '@tabler/icons-react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { NavLayout } from '../NavBar/NavBar';
import classes from './Layout.module.css';

export function Layout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 40 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      footer={{ height: 40 }}
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

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
