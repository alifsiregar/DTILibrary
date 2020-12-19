import {
  DetailBukuUser,
  AdminLogin,
  Home,
  UserRegistration,
  KatalogBuku,
  PeminjamanBuku,
  RiwayatPinjam,
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
    path: '/katalog/:bukuNama',
    component: DetailBukuUser,
    isPublic: true,
  },
  {
    path: '/katalog',
    component: KatalogBuku,
    isPublic: true,
  },
  {
    path: '/peminjaman/:bukuNama',
    component: PeminjamanBuku,
    isPublic: true,
  },
  {
    path: '/pengembalian',
    component: RiwayatPinjam,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
