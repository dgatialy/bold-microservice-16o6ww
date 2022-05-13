import { styled } from "../stitches.config";

const variants = {
  ratio: {
    square: {
      aspectRatio: "1/1"
    },
    landscape: {
      aspectRatio: "4/3"
    },
    portrait: {
      aspectRatio: "3/4"
    },
    widescreen: {
      aspectRatio: "16/9"
    },
    ultraWide: {
      aspectRatio: "18/5"
    },
    golden: {
      aspectRatio: "1.6180/1"
    }
  }
};

export const Image = styled("img", {
  width: "100%",
  objectFit: "contain",
  variants: {
    ...variants,
    variant: {
      productsCard: {
        ...variants.ratio.square
      }
    }
  },
  defaultVariants: {
    ratio: "square"
  }
});
