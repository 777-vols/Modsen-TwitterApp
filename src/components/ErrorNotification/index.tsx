import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAction } from '@/hooks/useAction';
import {
  errorNotificationSelector,
  notificationMessageSelector,
  successNotificationSelector
} from '@/store/slices/notificationSlice/selectors';

import { Message, Wrapper } from './styled';

const ErrorNotification: FC = () => {
  const isErrorActive = useSelector(errorNotificationSelector);
  const isSuccessActive = useSelector(successNotificationSelector);
  const message = useSelector(notificationMessageSelector);
  const { setNotificationInactive } = useAction();

  useEffect(() => {
    if (isErrorActive || isSuccessActive) {
      setTimeout(setNotificationInactive, 5000);
    }
  }, [isErrorActive, isSuccessActive, setNotificationInactive]);

  if (isErrorActive) {
    return (
      <Wrapper $isErrorActive>
        <Message>{message}</Message>
      </Wrapper>
    );
  }
  if (isSuccessActive) {
    return (
      <Wrapper $isErrorActive={false}>
        <Message>{message}</Message>
      </Wrapper>
    );
  }
  return null;
};

export default memo(ErrorNotification);
