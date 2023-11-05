import { Urls } from '@/constants/urls';
import Home from '@/pages/Home';
import LogIn from '@/pages/LogIn';
import SignUp from '@/pages/SignUp';

import { IRoute } from './types';

export const publicRoutes: IRoute[] = [
  {
    path: Urls.HOME,
    Component: Home
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
