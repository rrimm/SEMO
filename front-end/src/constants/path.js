const BROWSER_PATH = {
  BASE: '/',
  CART: '/cart',
  DETAILS: '/details',
  JOIN: '/join',
  LOGIN: '/login',
  MY: '/my',
  OUTFIT: '/outfit',
  PRODUCT: '/product',
  REVIEW: '/review',
  REVIEW_FORM: '/review-form',
  NOT_FOUND: '/notfound',
  PEOPLE: '/people',
};

const API_PATH = {
  AUTH: {
    JOIN: '/api/join',
    LOGIN: '/api/login',
    LOGOUT: '/api/logout',
    RE: '/api/reissue',
  },
  MAIN: {
    HEADER: 'http:localhost:4000/my',
  },
  CART: {
    BASE: '/auth/cart',
    CHECK: '/auth/cart/check',
    QUANTITY: '/auth/cart/quantity',
  },
  MY: {
    ADDRESS: '/auth/address',
    BASE: '/auth/member',
    ORDER: '/auth/order',
    ORDER_ALL: '/auth/order/all',
    UPDATE: {
      PASSWORD: '/auth/member/password',
    },
  },
  PRODUCT: {
    BASE: '/api/product',
    RELATED: '/api/product/related',
    SEARCH: '/api/product/search',
  },
  REVIEW: {
    BASE: '/api/review',
    AUTH: '/auth/review',
    FORM: '/auth/review/form',
  },
};

export { BROWSER_PATH, API_PATH };
