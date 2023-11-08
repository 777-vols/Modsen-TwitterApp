import { TypeState } from '@/store/index';

export const isUserAuthSelector = (state: TypeState) => state.user.isAuth;
