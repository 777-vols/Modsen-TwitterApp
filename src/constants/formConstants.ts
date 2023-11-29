export const minMaxLineLength = {
  minLineLength: 4,
  maxLineLength: 35
};

export const formPatterns = {
  namePattern: /^[a-zA-Z0-9]+$/,
  phoneNumberPattern: /^[+][(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,8}$/im,
  passwordPattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
  emailPattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,4})+$/,
  telegramPattern: /^(?:https?:\/\/)?(?:www\.)?(?:t\.me|telegram\.me)\/([a-zA-Z0-9_]{5,32})\/?$/
};
