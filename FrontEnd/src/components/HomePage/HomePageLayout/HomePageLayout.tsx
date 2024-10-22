import { useState } from 'react';
import {  AppShell,  } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';
import { Header } from '../Header/Header';
import { NavLayout } from '../NavBar/NavBar';

export function HomePageLayout() {
  const [opened, { toggle }] = useDisclosure();

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