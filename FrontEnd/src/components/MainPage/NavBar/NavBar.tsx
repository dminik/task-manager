import React, { useState } from 'react';
import {
  IconHeartHandshake,
  IconHelpCircle,
  IconHome,
  IconLayoutSidebarLeftCollapse,
  IconNotes,
  IconReceipt2,
  IconTower,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

interface NavLayoutProps {
  collapsed: boolean;
  onToggleNavbar: () => void;
}

export function NavLayout({ collapsed, onToggleNavbar }: NavLayoutProps) {
  const [active, setActive] = useState('Home');

  const mainLinksData: LinkData[] = [
    { link: '/', label: 'Home', icon: IconHome },
    { link: '/events', label: 'Events', icon: IconReceipt2 },
    { link: '/venues', label: 'Venues & Locations', icon: IconTower },
    { link: '/transactions', label: 'Transactions', icon: IconNotes },
    { link: '/sponsors', label: 'Sponsors', icon: IconHeartHandshake },
  ];

  const bottomLinksData: LinkData[] = [
    { link: '#', label: 'Help', icon: IconHelpCircle },
    { link: '#', label: 'Collapse', icon: IconLayoutSidebarLeftCollapse },
  ];

  interface LinkData {
    link: string;
    label: string;
    icon: React.ForwardRefExoticComponent<any>;
  }

  function MakeLink(item: LinkData, active: string, setActive: React.Dispatch<React.SetStateAction<string>>, collapsed: boolean) {
    return <Link
      className={classes.link}
      to={item.link}
      key={item.label}

      data-active={item.label === active || undefined}
      onClick={() => {
        if (item.label === 'Collapse') {
          onToggleNavbar();
        } else {
          setActive(item.label);
        }
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      {!collapsed && <span>{item.label}</span>}
    </Link>;
  }

  const mainLinks = mainLinksData.map((item) => (
    MakeLink(item, active, setActive, collapsed)
  ));

  const bottomLinks = bottomLinksData.map((item) => (
    MakeLink(item, active, setActive, collapsed)
  ));
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{mainLinks}</div>
      <div className={classes.footer}>{bottomLinks}</div>
    </nav>
  );
}


