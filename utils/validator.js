// import { cardTypeFromNumber } from './creditCardValidator';

const REQUIRED = /\S+/;
const NUMBER = /^[0-9]+$/;
const PHONE_NUMBER = /^[0-9- \uFF0D][\d- \uFF0D]+[0-9]$/;
const ALPHA = /^[A-z\s]+$/;
const ALPHA_NUMERIC = /^[a-zA-Z0-9\s+]+$/;
const ALPHA_NUMERIC_NO_WHITE_SPACE = /^[a-zA-Z0-9+]+$/;
const NAME = /^[a-zA-Z0-9\-'.+,"]*$/;
const ADDRESS = /^[a-zA-Z0-9\-'.,\s]*$/;
const CUSTOMER_LANGUAGE = /^[a-zA-Z0-9-]*$/;
const NAME_CUSTOMER_LANGUAGE = /^[0-9 \w\-\u4E00-\u9FFF\u3000-\u3303\u4E00-\u9FD5\u1100-\u11FF\uAC00-\uD7A3\u0080-\u00FF\u0E00-\u0E7F]*$/;
const RAKUTEN_POINT = /^[0-9]+$/;
const RAKUTEN_PW = /^[a-zA-Z0-9\s+]{6,128}$/;
const URL = /^(.*)(http|https|ftp):\/\/(.*)/i;
const INLINE_EMAIL = /^(.*)([-!#$%&’*+/=?^_`{|}~A-Za-z0-9]+(\.[-!#$%&’*+/=?^_`{|}~A-Za-z0-9]+)*|"([\x20\x21\x23-\x5B\x5D-\x7E]|\\[\x20-\x7E])*")@(([A-Za-z0-9]([-A-Za-z0-9]*[A-Za-z0-9])?)(\.[A-Za-z0-9]([-A-Za-z0-9]*[A-Za-z0-9])?)+)(.*)/;

const EMAIL = /^([-!#$%&’*+/=?^_`{|}~A-Za-z0-9]+(\.[-!#$%&’*+/=?^_`{|}~A-Za-z0-9]+)*|"([\x20\x21\x23-\x5B\x5D-\x7E]|\\[\x20-\x7E])*")@(([A-Za-z0-9]([-A-Za-z0-9]*[A-Za-z0-9])?)(\.[A-Za-z0-9]([-A-Za-z0-9]*[A-Za-z0-9])?)+)$/;
const CARD_HOLDER = /^[a-zA-Z\s+]{0,64}$/;

// const AUTH_KEY = /[a-zA-Z0-9\s+]{1,8}/;
// const BANK_ACCOUNT_NUMBER = /^\d{1,7}$/;

const required = value => !!value && REQUIRED.test(value);

const number = value => NUMBER.test(value);

const phoneNumber = value => (!!value && PHONE_NUMBER.test(value)) || value === '';

const alpha = value => !!value && ALPHA.test(value);

const alphaNumeric = value => !!value && ALPHA_NUMERIC.test(value);

const name = value => !!value && NAME.test(value);

const address = value => !!value && ADDRESS.test(value);

const customerLanguage = value => !!value && CUSTOMER_LANGUAGE.test(value);

const nameCustomerLang = value => !!value && NAME_CUSTOMER_LANGUAGE.test(value);

const rakutenPoint = value => !!value && !!value && RAKUTEN_POINT.test(value);

const rakutenPW = value => !!value && RAKUTEN_PW.test(value);

const email = value => !!value && EMAIL.test(value);

// const creditCardNumber = value => !!value && !!cardTypeFromNumber(value);

const url = value => !!value && URL.test(value);

const inlineEmail = value => !!value && INLINE_EMAIL.test(value);

const alphaNumericNoWhiteSpace = value => !!value && ALPHA_NUMERIC_NO_WHITE_SPACE.test(value);

const cardHolder = value => !!value && CARD_HOLDER.test(value);

// const authenticationKey = value => !!value && AUTH_KEY.test(value);

// const bankAccountNumber = value => !!value && BANK_ACCOUNT_NUMBER.test(value);

const validator = {
  required,
  number,
  phoneNumber,
  alpha,
  alphaNumeric,
  name,
  customerLanguage,
  nameCustomerLang,
  rakutenPoint,
  rakutenPW,
  email,
  url,
  inlineEmail,
  alphaNumericNoWhiteSpace,
  cardHolder,
  address
  // creditCardNumber,
  // authenticationKey,
  // bankAccountNumber
};

export default validator;
