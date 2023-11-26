import {
  setErrorNotification,
  setNotificationInactive,
  setSuccessNotification
} from '@/store/slices/notificationSlice';
import { addAllTweets, addTweet, deleteTweet, likeTweet } from '@/store/slices/tweetsSlice';
import { authenticateUser, deauthenticateUser, updateUserData } from '@/store/slices/userSlice';

export const actionCreators = {
  addTweet,
  likeTweet,
  deleteTweet,
  addAllTweets,
  updateUserData,
  authenticateUser,
  deauthenticateUser,
  setErrorNotification,
  setSuccessNotification,
  setNotificationInactive
};
