const BROWSER_PATH = {
  BASE: "/",
  CART: "/cart",
  DETAILS: "/details",
  JOIN: "/join",
  LOGIN: "/login",
  MY: "/my",
  OUTFIT: "/outfit",
  PRODUCT: "/product",
  REVIEW: "/review",
  REVIEW_FORM: "/review-form",
  NOT_FOUND: "/notfound",
};

// TODO: 추후 스프링과 연동하기
const API_PATH = {
  AUTH: {
    JOIN: "/api/join",
    LOGIN: "/api/login",
    LOGOUT: "/api/logout",
    RE: "/api/reissue",
  },
  MAIN: {
    HEADER: "http:localhost:4000/my", // GET API
  },
  CART: {
    BASE: "/auth/cart", // GET API,
    CHECK: "/auth/cart/check",
    QUANTITY: "/auth/cart/quantity",
  },
  MY: {
    ADDRESS: "/auth/address",
    BASE: "/auth/member",
    ORDER: "/auth/order",
    ORDER_ALL: "/auth/order/all",
    UPDATE: {
      ADDRESS: "https://reqres.in/api/users", // POST API
      PASSWORD: "/auth/member/password", // Put API
    },
  },
  PRODUCT: {
    BASE: "/api/product", // GET
    RELATED: "/api/product/related",
    SEARCH: "/api/product/search",
  },
  REVIEW: {
    BASE: "/api/review",
    AUTH: "/auth/review",
    FORM: "/auth/review/form",
  },
};

export { BROWSER_PATH, API_PATH };
