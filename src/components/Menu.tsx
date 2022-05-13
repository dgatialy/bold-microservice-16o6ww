import { styled } from "../stitches.config";
import { Headline } from "./Headline";
import { Divider } from "./Divider";
import { Text } from "./Text";

interface IMenu {
  title: string;
  subtitle?: string;
  description?: string;
  children: React.ReactNode;
}

export const Menu = ({
  title,
  subtitle,
  description,
  children: products
}: IMenu) => {
  return (
    <div>
      <Headline variant="menu" as="h2">
        {title} {subtitle && <span>{subtitle}</span>}
      </Headline>
      <Divider />
      {description && (
        <Text variant="menuDescription" as="p">
          {description}
        </Text>
      )}
      {products}
    </div>
  );
};
