import BreakPoints from './styles/breakPoints';
import Colors from './styles/colors';
import FontSize from './styles/fontSizes';
import Spaces from './styles/spaces';
import ITheme from './types';

const theme: ITheme = {
  colors: {
    white: Colors.WHITE,
    black: Colors.BLACK,
    lightRed: Colors.LIGHT_RED,
    blue: Colors.BLUE,
    grey: Colors.GREY,
    lightGrey: Colors.LIGHT_GREY,
    pink: Colors.PINK
  },
  fontFamily: "'Roboto', sans-serif",
  fontWeights: {
    l: 900,
    m: 700,
    s: 400
  },
  fontSizes: {
    largeXL: FontSize.LARGE_XL,
    largeL: FontSize.LARGE_L,
    largeM: FontSize.LARGE_M,
    largeS: FontSize.LARGE_S,
    mediumXL: FontSize.MEDIUM_XL,
    mediumL: FontSize.MEDIUM_L,
    mediumM: FontSize.MEDIUM_M,
    mediumS: FontSize.MEDIUM_S,
    smallXXL: FontSize.SMALL_XXL,
    smallXL: FontSize.SMALL_XL,
    smallL: FontSize.SMALL_L,
    smallM: FontSize.SMALL_M,
    smallS: FontSize.SMALL_S
  },
  spaces: {
    largeXL: Spaces.LARGE_XL,
    largeL: Spaces.LARGE_L,
    largeM: Spaces.LARGE_M,
    largeS: Spaces.LARGE_S,
    mediumXL: Spaces.MEDIUM_XL,
    mediumL: Spaces.MEDIUM_L,
    mediumM: Spaces.MEDIUM_M,
    mediumS: Spaces.MEDIUM_S,
    smallXL: Spaces.SMALL_XL,
    smallL: Spaces.SMALL_L,
    smallM: Spaces.SMALL_M,
    smallS: Spaces.SMALL_S,
    zero: Spaces.ZERO
  },
  breakPoints: {
    bigScreen: BreakPoints.BIG_SCREEN,
    laptop: BreakPoints.LAPTOP,
    tablet: BreakPoints.TABLET,
    mobile: BreakPoints.MOBILE
  }
};

export default theme;
