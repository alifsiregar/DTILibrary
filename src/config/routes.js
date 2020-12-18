import { AdminLogin, Home, UserRegistration } from '../pages';

const routes = [
  {
    path: '/registration',
    component: UserRegistration,
    isPublic: true,
  },
  {
    path: '/admin',
    component: AdminLogin,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
