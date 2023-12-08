export const config = {
  header: 'Edit profile',
  genderHeader: 'Gender',
  placeholders: {
    namePlaceholder: 'Name',
    phonePlaceholder: 'Phone number',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    telegramPlaceholder: 'Telegram URL'
  },
  errorMessages: {
    nameError: 'Username is invalid!',
    phoneNumberError: 'The phone number is invalid!',
    emailError: 'Email is invalid!',
    passwordError:
      'The password must contain at least one capital letter, at least one number and be no shorter than 8 characters!',
    telegramError: 'Telegram URL is invalid!'
  },
  errorNotificationText: 'User data update error, check that the entered data is correct!',
  successNotificationText: 'Your data has been changed successfully',
  buttonText: 'Save changes',
  genderOptionsArray: [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ]
};
