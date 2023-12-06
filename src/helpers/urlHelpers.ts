import { Urls } from '@/constants/urls';

const userIdIndex = 2;
const tweetIdIndex = 2;
const pageNameIndex = 1;

const { PROFILE, HOME_TWEET } = Urls;

export const getTweetIdFromUrl = (pathname: string) => {
  if (pathname.split('/').includes(HOME_TWEET.split('/')[pageNameIndex]))
    return pathname.split('/')[tweetIdIndex];
  return false;
};

export const getUserIdFromUrl = (pathname: string) => {
  if (pathname.split('/').includes(PROFILE.split('/')[pageNameIndex]))
    return pathname.split('/')[userIdIndex];
  return false;
};

export const checkIsProfilePage = (pathname: string) =>
  pathname.split('/').includes(PROFILE.split('/')[pageNameIndex]);
