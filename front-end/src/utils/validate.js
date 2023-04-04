const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const PHONE_NUMBER_REGEX = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
const PW_REGEX = /^[a-zA-z0-9]{8,16}$/;
const BIRTHDAY_REGEX = /^[0-9-]{10}$/;

export { EMAIL_REGEX, PHONE_NUMBER_REGEX, PW_REGEX, BIRTHDAY_REGEX };
