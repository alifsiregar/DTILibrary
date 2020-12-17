import { Home, inputBuku } from '../pages';

const routes = [
  {
    path: '/inputBuku',
    component: inputBuku,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
