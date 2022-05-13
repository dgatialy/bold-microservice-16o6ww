import { styled, keyframes } from "../stitches.config";
const baseUrl = "https://stadtsalat.de";

const pulse = keyframes({
  "0%": { opacity: 0.5 },
  "100%": { opacity: "100%" }
});

export const Tag = styled("div", {
  width: "30px",
  height: "30px",
  borderRadius: "15px",
  background: "black",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  variants: {
    icon: {
      vegan: {
        backgroundImage: `url(${baseUrl}/7f4005f4d268583a2104450733876ca7.svg)`
      },
      vegetarian: {
        backgroundImage: `url(${baseUrl}/82d07a9d46b14fae1b244aa11d1a5b3c.svg)`
      },
      lactosefree: {
        backgroundImage: `url(${baseUrl}/deeb75149667bb97e8e19ea327c78e02.svg)`
      },
      glutenfree: {
        backgroundImage: `url(${baseUrl}/ed2016f840aef7eba1b25c0ac676d8d5.svg)`
      }
    }
  },
  defaultVariants: {
    icon: "vegan"
  }
});
