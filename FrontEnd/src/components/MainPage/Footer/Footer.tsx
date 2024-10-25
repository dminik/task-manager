import { Link } from 'react-router-dom';
import { Group } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  const linksData = [
    { label: 'Support', link: '/support' },
    { label: 'Help Center', link: '/help' },
    { label: 'Terms of Service', link: '/terms' },
    { label: 'Privacy Policy', link: '/policy' },
  ];

  return (
    <Group justify="center">
      {linksData.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </Group>
  );
}
