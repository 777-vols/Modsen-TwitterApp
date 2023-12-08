import {
  setErrorNotification,
  setIsLoading,
  setNotificationInactive,
  setSuccessNotification
} from '@/store/slices/notificationSlice';
import { changeTheme } from '@/store/slices/themeSlice';
import {
  addAllTweets,
  addChunkTweets,
  addLastDocumentInChunk,
  addTweet,
  deleteTweet,
  likeTweet
} from '@/store/slices/tweetsSlice';
import { authenticateUser, deauthenticateUser, updateUserData } from '@/store/slices/userSlice';

export const actionCreators = {
  addTweet,
  likeTweet,
  deleteTweet,
  changeTheme,
  addAllTweets,
  setIsLoading,
  addChunkTweets,
  updateUserData,
  authenticateUser,
  deauthenticateUser,
  setErrorNotification,
  setSuccessNotification,
  addLastDocumentInChunk,
  setNotificationInactive
};
