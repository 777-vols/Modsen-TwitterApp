import {
  setErrorNotification,
  setNotificationInactive,
  setSuccessNotification
} from '@/store/slices/notificationSlice';
import { changeTheme } from '@/store/slices/themeSlice';
import { addAllTweets, addTweet, deleteTweet, likeTweet } from '@/store/slices/tweetsSlice';
import { authenticateUser, deauthenticateUser, updateUserData } from '@/store/slices/userSlice';

export const actionCreators = {
  addTweet,
  likeTweet,
  deleteTweet,
  changeTheme,
  addAllTweets,
  updateUserData,
  authenticateUser,
  deauthenticateUser,
  setErrorNotification,
  setSuccessNotification,
  setNotificationInactive
};
