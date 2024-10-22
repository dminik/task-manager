import { useState } from 'react';
import { Group, Code, Burger, } from '@mantine/core';
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
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarSimple.module.css';
import { useDisclosure } from '@mantine/hooks';


export function Header() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
      />
      <Group>
        <MantineLogo size={28} />
        <Code fw={700}>v3.1.2</Code>
      </Group>

    </>);
}