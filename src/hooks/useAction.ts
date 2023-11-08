import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { TypeDispatch } from '@/store';
import { actionCreators } from '@/store/slices/actionCreators';

export const useAction = () => {
  const dispatch = useDispatch<TypeDispatch>();
  return bindActionCreators(actionCreators, dispatch);
};
