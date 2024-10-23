import { Group, } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

export function Footer() {

  const linksData = [
    { label: 'Support', link: '#' },
    { label: 'Help Center', link: '#' },
    { label: 'Terms of Service', link: '#' },
    { label: 'Privacy Policy', link: '#' },
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