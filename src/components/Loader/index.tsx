import { FC } from 'react';

import { Spinner, SpinnerWrapper } from './styled';
import { IProps } from './types';

export const Loader: FC<IProps> = ({ size }) => (
  <SpinnerWrapper>
    <Spinner $size={size} />
  </SpinnerWrapper>
);
