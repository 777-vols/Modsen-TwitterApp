export interface IProps {
  handleCloseModal: () => void;
}

export interface IEditUserFormData {
  name: string;
  email: string;
  gender: string;
  phoneNumber?: string;
  password?: string;
  telegram?: string;
}
