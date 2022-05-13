import { styled } from "../stitches.config";

import { Price } from "./Price";
import { StitchesVariants } from "../types/StichesVariants";
import { Image } from "./Image";
import { Text } from "./Text";
import { Button } from "./Button";
import { Headline } from "./Headline";
import { Tag } from "./Tag";
import { TagGrid } from "./TagGrid";

export interface IProductsCard {
  image: string;
  dietaryInfo: {
    tags?: StitchesVariants<typeof Tag>[];
  };
  name: string;
  description: string;
  price: {
    withVat: string;
  };
  id: string;
}

const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  scrollSnapAlign: "start"
});

const PriceBox = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "$2",
  marginTop: "auto",
  alignItems: "center"
});

export const ProductsCard = ({
  image,
  dietaryInfo: { tags: dietaryInfo },
  name,
  description,
  price: { withVat: priceWithVat },
  id
}: IProductsCard) => {
  return (
    <Card>
      <Image
        variant="productsCard"
        src={`https://static.stadtsalat.de/shop/image/${image}`}
      />

      <TagGrid>
        {dietaryInfo &&
          dietaryInfo.map(
            (tag: StitchesVariants<typeof Tag>, index: number) => {
              return <Tag key={index} icon={tag} />;
            }
          )}
      </TagGrid>

      <Headline variant="productsCard" as="h3">
        {name}
      </Headline>
      <Text variant="productsCardDescription">{description}</Text>
      <PriceBox>
        <Price>{priceWithVat}</Price>
        <Button>Auswählen</Button>
      </PriceBox>
    </Card>
  );
};
