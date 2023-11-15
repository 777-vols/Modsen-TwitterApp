import { Urls } from '@/constants/urls';
import Home from '@/pages/Home';
import LogIn from '@/pages/LogIn';
import Profile from '@/pages/Profile';
import Root from '@/pages/Root';
import SignUp from '@/pages/SignUp';

import { IRoute } from './types';

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
  }
];
