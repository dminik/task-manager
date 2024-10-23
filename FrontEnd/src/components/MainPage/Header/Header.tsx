import { useState } from 'react';
import { Group, Code, Burger, } from '@mantine/core';
import {
  IconSwitchHorizontal,
  IconLogout,
  IconAutomaticGearbox,
  IconManualGearbox,
  IconSettings,
  IconBell
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import FastbreakLogo from '@/components/Icons/FastbreakLogo/FastbreakLogo';

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

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 20px' }}>
        <Group>
          <FastbreakLogo size={168} />
        </Group>
        <Group>
          <IconBell size={18} />
          <IconSettings size={18} />
        </Group>
      </div>

    </>);
}