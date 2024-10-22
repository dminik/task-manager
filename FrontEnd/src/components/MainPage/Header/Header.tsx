import { useState } from 'react';
import { Group, Code, Burger, } from '@mantine/core';
import {
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
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
        <Code fw={700} >Gear</Code>
      </Group>
    </>);
}