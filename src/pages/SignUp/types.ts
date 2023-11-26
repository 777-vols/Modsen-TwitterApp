export interface IUserFormData {
  id: string;
  name: string;
  password: string;
  phoneNumber: string;
  email: string;
  year: string;
  month: string;
  day: string;
  token: string;
}

export interface ISighUpWithEmailUser {
  id: string;
  name: string;
  password: string;
  phoneNumber: string;
  email: string;
  birthDate: Date;
  photo?: string;
}

export interface IOption {
  value: string;
  label: string;
}
