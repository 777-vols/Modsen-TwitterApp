import { FC, memo } from 'react';

import { StyledLabel, SwichToggle } from './styled';

const Checkbox: FC = () => {
  const handleChangeTheme = () => {};

  return (
    <StyledLabel onChange={handleChangeTheme} htmlFor="themeCheckbox" $currentTheme="dark">
      <SwichToggle id="themeCheckbox" />
    </StyledLabel>
  );
};

export default memo(Checkbox);
