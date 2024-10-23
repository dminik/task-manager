import { useState } from 'react';
import {
  IconBellRinging,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import classes from './NavbarSimple.module.css';
import { Link } from 'react-router-dom';

const data = [
  { link: '/', label: 'Home', icon: IconBellRinging },
  { link: '/events', label: 'Events', icon: IconReceipt2 },
];

export function NavLayout() {
  const [active, setActive] = useState('Home');

  const links = data.map((item) => (
    <Link
    className={classes.link}
    to={item.link}  // Use `to` instead of `href`
    key={item.label}
    data-active={item.label === active || undefined}
    onClick={() => setActive(item.label)} // No need for preventDefault anymore
  >
    <item.icon className={classes.linkIcon} stroke={1.5} />
    <span>{item.label}</span>
  </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
      {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}