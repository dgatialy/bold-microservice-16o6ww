import { styled } from "../stitches.config";

const productsCard = {
  productsCardDescription: {
    fontWeight: 300,
    fontSize: "$3"
  }
};

const menu = {
  menuDescription: {
    fontSize: "$6",
    fontWeight: 300,
    paddingTop: "$1",
    paddingBottom: "$4"
  }
};

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    size: {
      "1": {
        fontSize: "$1"
      },
      "2": {
        fontSize: "$2"
      },
      "3": {
        fontSize: "$3"
      },
      "4": {
        fontSize: "$4"
      },
      "5": {
        fontSize: "$5",
        letterSpacing: "-.015em"
      },
      "6": {
        fontSize: "$6",
        letterSpacing: "-.016em"
      },
      "7": {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em"
      },
      "8": {
        fontSize: "$8",
        letterSpacing: "-.034em",
        textIndent: "-.018em"
      },
      "9": {
        fontSize: "$9",
        letterSpacing: "-.055em",
        textIndent: "-.025em"
      }
    },
    variant: {
      ...productsCard,
      ...menu
    }
  },
  defaultVariants: {
    size: "3"
  }
});
