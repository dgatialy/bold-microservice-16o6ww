import { styled } from "../stitches.config";

export const Button = styled("button", {
  // Reset
  alignItems: "center",
  appearance: "none",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1.33",
  margin: "0",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box"
  },
  "&::after": {
    boxSizing: "border-box"
  },
  background: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: "$stadtsalat",

  variants: {
    variant: {
      primary: {
        background: "#32c3ff",
        color: "white",
        textTransform: "uppercase",
        fontSize: "$4",
        fontWeight: "700",
        padding: "10px 16px",
        borderRadius: "$2",

        "&:hover": {
          background: "#2da5dc"
        }
      }
    }
  },

  defaultVariants: {
    variant: "primary"
  }
});
