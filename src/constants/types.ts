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
    largeXL: string;
    largeL: string;
    largeM: string;
    largeS: string;
    mediumXL: string;
    mediumL: string;
    mediumM: string;
    mediumS: string;
    smallXL: string;
    smallL: string;
    smallM: string;
    smallS: string;
  };
  spaces: {
    largeXL: string;
    largeL: string;
    largeM: string;
    largeS: string;
    mediumXL: string;
    mediumL: string;
    mediumM: string;
    mediumS: string;
    smallXL: string;
    smallL: string;
    smallM: string;
    smallS: string;
    zero: string;
  };
  breakPoints: {
    largeL: string;
    largeM: string;
    largeS: string;
    mediumL: string;
    mediumM: string;
    mediumS: string;
    smallL: string;
    smallM: string;
    smallS: string;
  };
}
export default ITheme;
