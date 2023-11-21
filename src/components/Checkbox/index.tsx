import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { useAction } from '@/hooks/useAction';
import { themeSelector } from '@/store/slices/themeSlice/selectors';

import { StyledLabel, SwichToggle } from './styled';

const Checkbox: FC = () => {
  const isDarkTheme = useSelector(themeSelector);
  const { changeTheme } = useAction();

  const handlerChangeTheme = () => {
    changeTheme();
  };

  return (
    <StyledLabel onChange={handlerChangeTheme} htmlFor="themeCheckbox" $currentTheme={isDarkTheme}>
      <SwichToggle id="themeCheckbox" />
    </StyledLabel>
  );
};

export default memo(Checkbox);
