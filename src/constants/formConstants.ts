export const minMaxLineLength = {
  minLineLength: 5,
  maxLineLength: 25
};

export const formPatterns = {
  namePattern: /^[a-zA-Z0-9]+$/,
  phoneNumberPattern: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im,
  passwordPattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
};
