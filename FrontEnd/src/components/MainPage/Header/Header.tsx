import {
  IconBell,
  IconSettings,
} from '@tabler/icons-react';
import { Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FastbreakLogo from '@/components/Icons/FastbreakLogo/FastbreakLogo';
import { Link } from 'react-router-dom';

export function Header() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '10px 20px',
        }}
      >
        <Group>
          <Link to="/" >
            <FastbreakLogo size={168} />
          </Link>
        </Group>
        <Group>
          <Link to="#">
            <IconBell size={18} />
          </Link>
          <Link to="#" >
            <IconSettings size={18} />
          </Link>
        </Group>
      </div>
    </>
  );
}
