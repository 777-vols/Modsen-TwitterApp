import 'styled-components';

import ITheme from './constants/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
