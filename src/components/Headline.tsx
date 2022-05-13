import { styled } from "../stitches.config";

export const Headline = styled("span", {
  fontWeight: "800",
  textTransform: "uppercase",
  letterSpacing: "-0.02em",
  //margin: "$2 0 $2 0"
  margin: 0,
  variants: {
    size: {
      medium: {
        fontSize: "$5"
      }
    },
    variant: {
      menu: {
        fontSize: "$8",
        "& span": {
          fontWeight: 300
        }
      },
      productsCard: {
        fontSize: "$7"
      }
    }
  },
  defaultVariants: {
    size: "medium"
  }
});
