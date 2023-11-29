import { BreakPoints } from './styles/breakPoints';
import { Colors } from './styles/colors';
import { FontSizes } from './styles/fontSizes';
import { Spaces } from './styles/spaces';
import { IDefaultTheme } from './types';

export const defaultTheme: IDefaultTheme = {
  colors: {
    white: Colors.WHITE,
    black: Colors.BLACK,
    lightRed: Colors.LIGHT_RED,
    blue: Colors.BLUE,
    darkGrey: Colors.DARK_GREY,
    grey: Colors.GREY,
    lightGrey: Colors.LIGHT_GREY,
    pink: Colors.PINK,
    green: Colors.GREEN,
    modal_bg: Colors.MODAL_BG
  },
  fontFamily: "'Roboto', sans-serif",
  fontWeights: {
    l: 900,
    m: 700,
    s: 400
  },
  fontSizes: {
    largeXL: FontSizes.LARGE_XL,
    largeL: FontSizes.LARGE_L,
    largeM: FontSizes.LARGE_M,
    largeS: FontSizes.LARGE_S,
    mediumXL: FontSizes.MEDIUM_XL,
    mediumL: FontSizes.MEDIUM_L,
    mediumM: FontSizes.MEDIUM_M,
    mediumS: FontSizes.MEDIUM_S,
    smallXXL: FontSizes.SMALL_XXL,
    smallXL: FontSizes.SMALL_XL,
    smallL: FontSizes.SMALL_L,
    smallM: FontSizes.SMALL_M,
    smallS: FontSizes.SMALL_S
  },
  spaces: {
    largeXXL: Spaces.LARGE_XXL,
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
