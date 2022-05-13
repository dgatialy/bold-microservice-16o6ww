import { styled } from "../stitches.config";
import { Text } from "./Text";

const PriceTag = styled(Text, {
  variants: {
    variant: {
      default: {
        fontWeight: 800,
        fontSize: "$5"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export const Price = ({ children: price }: { children: string }) => {
  return (
    <PriceTag>
      {new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(parseFloat(price))}
    </PriceTag>
  );
};
