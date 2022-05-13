import { createStitches } from "@stitches/react";

import { slate } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  keyframes,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      ...slate,
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)"
    },
    space: {
      "000": "-.5rem",
      "00": "-.25rem",
      1: ".25rem",
      2: ".5rem",
      3: "1rem",
      4: "1.25rem",
      5: "1.5rem",
      6: "1.75rem",
      7: "2rem",
      8: "3rem",
      9: "4rem",
      10: "5rem",
      11: "7.5rem",
      12: "10rem",
      13: "15rem",
      14: "20rem",
      15: "30rem"
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "14px",
      4: "15px",
      5: "20px",
      6: "22px",
      7: "24px",
      8: "30px"
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      stadtsalat:
        "Montserrat, BlinkMacSystemFont, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif",
      mono: "Söhne Mono, menlo, monospace"
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px"
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px"
    },
    shadows: {},
    zIndices: {},
    transitions: {}
  },
  media: {
    bp1: "(min-width: 768px)",
    bp2: "(min-width: 1200px)",
    bp3: "(min-width: 1440px)"
  }
});

export const globalStyles = globalCss({
  body: {
    fontFamily: "$stadtsalat",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }
});
