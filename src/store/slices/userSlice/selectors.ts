import { TypeState } from '@/store/index';

export const isUserAuthSelector = (state: TypeState) => state.user.isAuth;
export const userSelector = (state: TypeState) => state.user.crrentUser;
