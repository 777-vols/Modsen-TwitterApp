interface ITheme {
  colors: {
    white: string;
    black: string;
    lightRed: string;
    blue: string;
    grey: string;
    lightGrey: string;
    pink: string;
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
    smallXL: number;
    smallL: number;
    smallM: number;
    smallS: number;
  };
  spaces: {
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
    xl: string;
    l: string;
    m: string;
    s: string;
  };
}
export default ITheme;
