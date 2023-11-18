import { setIsNotificationActive, setIsNotificationInactive } from '@/store/slices/errorSlice';
import { addAllTweets, addTweet, deleteTweet } from '@/store/slices/tweetsSlice';
import { authenticateUser, deauthenticateUser } from '@/store/slices/userSlice';

export const actionCreators = {
  authenticateUser,
  deauthenticateUser,
  setIsNotificationActive,
  setIsNotificationInactive,
  addTweet,
  deleteTweet,
  addAllTweets
};
