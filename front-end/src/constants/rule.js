const MEMBER_RULE = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 20,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 16,
  },
  PHONE_NUMBER: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 11,
  },
  ADDRESS: {
    RECIPIENT: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 20,
    },
    ZIP_CODE: {
      LENGTH: 5,
    },
  },
  CART: {
    MIN_QUANTITY: 1,
    MAX_QUANTITY: 9,
  },
};

export { MEMBER_RULE };
