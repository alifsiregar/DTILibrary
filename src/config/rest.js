export default {
  LOGIN: '/login',
  ADMIN: '/admin',
  SIGNUP: '/signup',
  CATEGORY: '/kategori',
  CREATECATEGORY: '/admin/kategori',
  UPDATECATEGORY: '/admin/kategori',
  DELETECATEGORY: (_id) => {
    return `/admin/kategori/${_id}`;
  },
};
