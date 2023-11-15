import { TypeState } from '@/store';

export const errorMessageSelector = (state: TypeState) => state.error.message;
export const isNotificationActiveSelector = (state: TypeState) => state.error.isActive;
