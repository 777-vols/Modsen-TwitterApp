import 'styled-components';

import { ITheme } from './constants/theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
