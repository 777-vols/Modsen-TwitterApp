enum Genders {
  male = 'male',
  female = 'female'
}

export const defaultUser = {
  defaultName: 'Name',
  defaultSurname: 'Surname',
  defaultPhotoUrl: 'photoUrl',
  defaultPassword: 'userPassword',
  defaultEmail: 'userPassword',
  defaultPhoneNumber: '+375294563541',
  defaultTelegram: '@user',
  defaultGender: Genders.male,
  defaultBirthDate: new Date(2000, 0, 1)
};
