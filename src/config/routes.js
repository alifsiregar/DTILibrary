import {
  AdminLogin,
  Home,
  UserRegistration,
  RakBuku,
  Perpustakaan,
  DetailBuku,
  Pengaturan,
} from '../pages';

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
    path: '/perpustakaan',
    component: Perpustakaan,
    isPublic: true,
  },
  {
    path: '/rakbuku',
    component: RakBuku,
    isPublic: true,
  },
  {
    path: '/detailbuku',
    component: DetailBuku,
    isPublic: true,
  },
  {
    path: '/pengaturan',
    component: Pengaturan,
    isPublic: true,
  },

  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
