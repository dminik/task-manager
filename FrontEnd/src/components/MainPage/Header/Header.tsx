import { IconBell, IconFaceId, IconLogin, IconLogout, IconPointFilled, IconSearch, IconSettings } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Burger, Group, Menu, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FastbreakLogo from '@/components/Icons/FastbreakLogo/FastbreakLogo';
import classes from './Header.module.css';

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  const userName = 'Sarah';

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
          <Link to="/">
            <FastbreakLogo size={168} />
          </Link>
        </Group>
        <Group>
          <Menu>
            <Menu.Target >
              <IconBell size={18} />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconFaceId size={18} />}
              >
                Name action 1<span className={classes.notificationDate}>2 days ago</span><IconPointFilled size={18} />
              </Menu.Item>
              <Menu.Item
                leftSection={<IconFaceId size={18} />}
              >
                Name action 2<span className={classes.notificationDate}>2 days ago</span>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu>
            <Menu.Target>
              <IconFaceId size={18} />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconSettings size={18} />}
              >
                Settings
              </Menu.Item>
              <Menu.Item
                leftSection={userName ? <IconLogin size={18} /> : <IconLogout size={18} />}
              >
                {userName ? 'Log Out' : 'Log In'}
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <span>{userName}</span>

        </Group>
      </div>
    </>
  );
}
