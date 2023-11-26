import { TypeState } from '@/store';

export const notificationMessageSelector = (state: TypeState) => state.notification.message;
export const successNotificationSelector = (state: TypeState) => state.notification.isSuccessActive;
export const errorNotificationSelector = (state: TypeState) => state.notification.isErrorActive;
export const isLoadingSelector = (state: TypeState) => state.notification.isLoading;
