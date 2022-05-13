import { ProductsCard, IProductsCard } from "./ProductsCard";
import { styled } from "../stitches.config";

interface IProductsCardGrid {
  list: IProductsCard[];
  horizontal?: boolean;
}

const GridContainer = styled("div", {});

// https://dev.to/joostkiens/creating-practical-instagram-like-galleries-and-horizontal-lists-with-css-scroll-snapping-580e
const Grid = styled("div", {
  display: "grid",
  gridGap: "$8",
  variants: {
    col: {
      one: {
        gridTemplateColumns: "1fr",
        gridAutoColumns: "minmax(70vw, 1fr);"
      },
      two: {
        gridTemplateColumns: "1fr 1fr",
        gridAutoColumns: "minmax(38vw, 1fr);"
      },
      three: {
        gridTemplateColumns: "1fr 1fr 1fr",
        gridAutoColumns: "minmax(25vw, 1fr);"
      },
      four: {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridAutoColumns: "minmax(15vw, 1fr);"
      }
    },
    horizontal: {
      true: {}
    }
  },
  compoundVariants: [
    {
      horizontal: true,
      css: {
        gridTemplateColumns: "inherit",
        gridAutoFlow: "column",
        overflowX: "scroll",
        //overscrollBehavior: "contain",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
        TouchAction: "pan-x",
        scrollSnapType: "x mandatory",
        "& > div": {
          scrollSnapAlign: "center"
        }
      }
    }
  ]
});

export const ProductsCardGrid = ({ list, horizontal }: IProductsCardGrid) => {
  return (
    <GridContainer>
      <Grid
        horizontal={horizontal ? true : false}
        col={{
          "@initial": "one",
          "@bp1": "two",
          "@bp2": "three",
          "@bp3": "four"
        }}
      >
        {list &&
          list.map(
            (
              {
                name,
                image,
                dietaryInfo: { tags },
                description,
                price: { withVat },
                id
              },
              index: number
            ) => {
              return (
                <ProductsCard
                  key={index}
                  name={name}
                  image={image}
                  dietaryInfo={{ tags }}
                  description={description}
                  price={{ withVat }}
                  id={id}
                />
              );
            }
          )}
      </Grid>
    </GridContainer>
  );
};
