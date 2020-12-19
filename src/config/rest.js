export default {
  LOGIN: '/login',
  GETBUKUUSER: '/buku',
  BUKUNAMA: (bukuNama) => {
    return `/buku/judul/${bukuNama}`;
  },
  PINJAM: '/pinjam',
  ADMIN: '/admin',
  SIGNUP: '/signup',
};
