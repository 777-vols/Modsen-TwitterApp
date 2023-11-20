export const config = {
  header: 'Edit profile',
  genderHeader: 'Gender',
  placeholders: {
    namePlaceholder: 'Name',
    phonePlaceholder: 'Phone number',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    telegramPlaceholder: 'Telegram'
  },
  errorMessages: {
    nameError: 'Username is invalid!',
    phoneNumberError: 'The phone number is invalid!',
    emailError: 'Email is invalid!',
    passwordError: 'Password is invalid!',
    telegramError: 'Telegram is invalid!'
  },
  successNotificationText: 'your data has been changed successfully',
  buttonText: 'Save changes',
  genderOptionsArray: [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ]
};
