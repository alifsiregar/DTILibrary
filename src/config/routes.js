import {
  RakBuku,
  Perpustakaan,
  DetailBuku,
  Pengaturan,
  Home,
  NotFound,
} from '../pages';

const routes = [
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
    path: '**',
    component: NotFound,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
