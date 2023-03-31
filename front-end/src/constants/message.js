import { MEMBER_RULE } from "./rule";

const CLIENT_ERROR_MESSAGE = {
  INVALID_PASSWORD: {
    LENGTH: `비밀번호는 최소${MEMBER_RULE.PASSWORD.MIN_LENGTH}자에서 ${MEMBER_RULE.PASSWORD.MAX_LENGTH}자 사이여야 합니다.`,
    CONFIRM: "비밀번호 재확인이 일치하지 않습니다.",
    CHANGE: "현재 비밀번호와 새 비밀번호가 일치하면 안됩니다.",
  },
  INVALID_EMAIL: {
    BASE: "올바르지 않은 이메일 형식입니다.",
    CHANGE: "현재 이메일과 새 이메일이 일치하면 안됩니다.",
  },
  INVALID_PHONE_NUMBER: {
    BASE: "올바르지 않은 전화번호 형식입니다.",
    LENGTH: `전화번호는 최소${MEMBER_RULE.PHONE_NUMBER.MIN_LENGTH}자에서 ${MEMBER_RULE.PHONE_NUMBER.MAX_LENGTH}자 사이여야 합니다.`,
    CHANGE: "현재 전화번호와 새 전화번호가 일치하면 안됩니다.",
  },
  INVALID_ADDRESS: {
    RECIPIENT: {
      CHANGE: "현재 수취인과 새 수취인의 이름이 일치하면 안됩니다.",
      LENGTH: `수취인의 이름은 최소${MEMBER_RULE.ADDRESS.RECIPIENT.MIN_LENGTH}자에서 ${MEMBER_RULE.ADDRESS.RECIPIENT.MAX_LENGTH}자 사이여야 합니다.`,
    },
    ZIP_CODE: {
      CHANGE: "현재 우편번호와 새 우편번호가 일치하면 안됩니다.",
      LENGTH: `우편 번호는 ${MEMBER_RULE.ADDRESS.ZIP_CODE.LENGTH}자여야 합니다.`,
    },
    ADDRESS: {
      CHANGE: "현재 주소와 새 주소의 이름이 일치하면 안됩니다.",
    },
  },
  INVALID_CART: {
    QUANTITY: {
      MAX: `장바구니는 최대 ${MEMBER_RULE.CART.MAX_QUANTITY}개 까지 가능합니다!`,
      MIN: `장바구니는 최소 ${MEMBER_RULE.CART.MIN_QUANTITY}개 까지 가능합니다!`,
    },
  },
};

export { CLIENT_ERROR_MESSAGE };
