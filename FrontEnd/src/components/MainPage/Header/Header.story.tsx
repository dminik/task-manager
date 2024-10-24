import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

export default {
  title: 'Header',
};

export const Usage = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
