import { StylesConfig } from 'react-select';

export const config = {
  header: 'Create an account',
  placeholders: {
    namePlaceholder: 'Name',
    phonePlaceholder: 'Phone number',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password'
  },
  errorMessages: {
    nameError: 'Username is invalid!',
    phoneNumberError: 'The phone number is invalid!',
    emailError: 'Email is invalid!',
    passwordError:
      'The password must contain at least one capital letter, at least one number and be no shorter than 8 characters!'
  },
  successNotificationText: 'Registration completed successfully!',
  emailUse: 'Use email',
  dateOfBirth: 'Date of birth',
  text: 'Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.',
  buttonText: 'Next',
  errorMessage: 'Registration error, check that the entered data is correct!'
};

export const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    minHeight: '55px'
  })
};
