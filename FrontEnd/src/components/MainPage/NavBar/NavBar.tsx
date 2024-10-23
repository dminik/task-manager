import { useState } from 'react';
import {
  IconHeartHandshake,
  IconHelpCircle,
  IconHome,
  IconNotes,
  IconReceipt2,
  IconTower,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './NavbarSimple.module.css';

const data = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/events', label: 'Events', icon: IconReceipt2 },
  { link: '/venues', label: 'Venues & Locations', icon: IconTower },
  { link: '/transactions', label: 'Transactions', icon: IconNotes },
  { link: '/sponsors', label: 'Sponsors', icon: IconHeartHandshake },
];

export function NavLayout() {
  const [active, setActive] = useState('Home');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      to={item.link}
      key={item.label}

      data-active={item.label === active || undefined}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <Link to="#" className={classes.link} >
          <IconHelpCircle className={classes.linkIcon} stroke={1.5} />
          <span>Help</span>
        </Link>
      </div>
    </nav>
  );
}
