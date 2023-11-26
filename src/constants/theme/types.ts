export interface IDefaultTheme {
  colors: {
    white: string;
    black: string;
    lightRed: string;
    blue: string;
    darkGrey: string;
    grey: string;
    lightGrey: string;
    pink: string;
    green: string;
    modal_bg: string;
  };
  fontFamily: string;
  fontWeights: {
    l: number;
    m: number;
    s: number;
  };
  fontSizes: {
    largeXL: number;
    largeL: number;
    largeM: number;
    largeS: number;
    mediumXL: number;
    mediumL: number;
    mediumM: number;
    mediumS: number;
    smallXXL: number;
    smallXL: number;
    smallL: number;
    smallM: number;
    smallS: number;
  };
  spaces: {
    largeXXL: number;
    largeXL: number;
    largeL: number;
    largeM: number;
    largeS: number;
    mediumXL: number;
    mediumL: number;
    mediumM: number;
    mediumS: number;
    smallXL: number;
    smallL: number;
    smallM: number;
    smallS: number;
    zero: number;
  };
  breakPoints: {
    bigScreen: number;
    laptop: number;
    tablet: number;
    mobile: number;
  };
}

export interface ITheme extends IDefaultTheme {
  background: string;
  color: string;
}
