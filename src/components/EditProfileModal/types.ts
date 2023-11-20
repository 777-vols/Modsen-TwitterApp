export interface IProps {
  handleCloseModal: () => void;
}

export interface IUserFormData {
  name: string;
  password: string;
  phoneNumber: string;
  email: string;
  gender: string;
  telegram?: string;
}
