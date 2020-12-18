export default {
  LOGIN: '/login',
  CATEGORY: '/kategori',
  CREATECATEGORY: '/admin/kategori',
  UPDATECATEGORY: '/admin/kategori/',
  CATEGORYBYNAME: (nama) => {
    return `/kategori/${nama}`;
  },
};
