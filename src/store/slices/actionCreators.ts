import { setIsNotificationActive, setIsNotificationInactive } from '@/store/slices/errorSlice';
import { authenticateUser, deauthenticateUser } from '@/store/slices/userSlice';

export const actionCreators = {
  authenticateUser,
  deauthenticateUser,
  setIsNotificationActive,
  setIsNotificationInactive
};
