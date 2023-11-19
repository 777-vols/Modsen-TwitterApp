interface ITheme {
  colors: {
    white: string;
    black: string;
    lightRed: string;
    blue: string;
    grey: string;
    lightGrey: string;
    pink: string;
    green: string;
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
export default ITheme;
