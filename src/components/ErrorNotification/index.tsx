import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAction } from '@/hooks/useAction';
import {
  errorMessageSelector,
  isNotificationActiveSelector
} from '@/store/slices/errorSlice/selectors';

import { Message, Wrapper } from './styled';

const ErrorNotification: FC = () => {
  const isActive = useSelector(isNotificationActiveSelector);
  const message = useSelector(errorMessageSelector);
  const { setIsNotificationInactive } = useAction();

  useEffect(() => {
    if (isActive) {
      setTimeout(setIsNotificationInactive, 5000);
    }
  }, [isActive, setIsNotificationInactive]);

  return isActive ? (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  ) : null;
};

export default memo(ErrorNotification);
