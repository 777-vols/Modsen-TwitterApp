import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import {
  errorMessageSelector,
  isNotificationActiveSelector
} from '@/store/slices/errorSlice/selectors';

import { Message, Wrapper } from './styled';

const ErrorNotification: FC = () => {
  const isActive = useSelector(isNotificationActiveSelector);
  const message = useSelector(errorMessageSelector);

  return isActive ? (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  ) : null;
};

export default memo(ErrorNotification);
