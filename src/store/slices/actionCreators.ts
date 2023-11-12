import { setIsNotificationActive } from '@/store/slices/errorSlice';
import { authenticateUser, deauthenticateUser } from '@/store/slices/userSlice';

export const actionCreators = {
  authenticateUser,
  deauthenticateUser,
  setIsNotificationActive
};
