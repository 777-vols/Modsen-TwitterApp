import {
  setErrorNotification,
  setNotificationInactive,
  setSuccessNotification
} from '@/store/slices/notificationSlice';
import { addAllTweets, addTweet, deleteTweet, likeTweet } from '@/store/slices/tweetsSlice';
import { authenticateUser, deauthenticateUser } from '@/store/slices/userSlice';

export const actionCreators = {
  authenticateUser,
  deauthenticateUser,
  setErrorNotification,
  setSuccessNotification,
  setNotificationInactive,
  addTweet,
  deleteTweet,
  addAllTweets,
  likeTweet
};
