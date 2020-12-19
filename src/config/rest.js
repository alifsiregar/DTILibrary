export default {
  GETBUKUUSER: '/buku',
  BUKUNAMA: (bukuNama) => {
    return `/buku/judul/${bukuNama}`;
  },
  PINJAM: '/pinjam',
  LOGIN: '/login',
  ADMIN: '/admin',
  SIGNUP: '/signup',
  BUKU: '/admin/buku',
  GETBUKU: '/buku',
  CATEGORY: '/kategori',
  CREATECATEGORY: '/admin/kategori',
  UPDATECATEGORY: '/admin/kategori',
  DELETECATEGORY: (_id) => {
    return `/admin/kategori/${_id}`;
  },
};
