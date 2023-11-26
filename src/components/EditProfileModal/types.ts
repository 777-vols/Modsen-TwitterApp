export interface IProps {
  handleCloseModal: () => void;
}

export interface IUserFormData {
  name: string;
  email: string;
  gender: string;
  phoneNumber?: string;
  password?: string;
  telegram?: string;
}
