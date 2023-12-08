import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { useAction } from '@/hooks/useAction';
import { themeSelector } from '@/store/slices/themeSlice/selectors';

import { SwitchButton, SwitchInput, SwitchLabel } from './styled';

const ToogleTheme: FC = () => {
  const isDarkTheme = useSelector(themeSelector);
  const { changeTheme } = useAction();

  const handlerChangeTheme = () => {
    changeTheme();
  };

  return (
    <>
      <SwitchInput
        data-cy="toggleTheme"
        id="themeCheckbox"
        type="checkbox"
        onChange={handlerChangeTheme}
      />
      <SwitchLabel htmlFor="themeCheckbox">
        <SwitchButton $currentTheme={isDarkTheme} />
      </SwitchLabel>
    </>
  );
};

export default memo(ToogleTheme);
