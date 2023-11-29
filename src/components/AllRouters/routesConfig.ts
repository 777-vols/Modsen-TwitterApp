import { lazy } from 'react';

import { Urls } from '@/constants/urls';

import { IRoute } from './types';

const LogIn = lazy(() => import('@/pages/LogIn'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const Root = lazy(() => import('@/pages/Root'));
const Home = lazy(() => import('@/pages/Home'));
const Profile = lazy(() => import('@/pages/Profile'));
const More = lazy(() => import('@/pages/More'));
const Notifications = lazy(() => import('@/pages/Notifications'));
const Messages = lazy(() => import('@/pages/Messages'));
const Lists = lazy(() => import('@/pages/Lists'));
const Explore = lazy(() => import('@/pages/Explore'));
const Bookmarks = lazy(() => import('@/pages/Bookmarks'));

export const publicRoutes: IRoute[] = [
  {
    path: Urls.ROOT,
    Component: Root
  },
  {
    path: Urls.LOG_IN,
    Component: LogIn
  },
  {
    path: Urls.SIGN_UP,
    Component: SignUp
  }
];

export const privateRoutes: IRoute[] = [
  {
    path: Urls.PROFILE,
    Component: Profile
  },
  {
    path: Urls.HOME,
    Component: Home
  },
  {
    path: Urls.HOME_TWEET,
    Component: Home
  },
  {
    path: Urls.MORE,
    Component: More
  },
  {
    path: Urls.NOTIFICATIONS,
    Component: Notifications
  },
  {
    path: Urls.MESSAGES,
    Component: Messages
  },
  {
    path: Urls.LISTS,
    Component: Lists
  },
  {
    path: Urls.EXPLORE,
    Component: Explore
  },
  {
    path: Urls.BOOKMARKS,
    Component: Bookmarks
  }
];
