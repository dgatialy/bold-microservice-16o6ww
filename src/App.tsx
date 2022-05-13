import { globalStyles } from "./stitches.config";
import { useProducts } from "./hooks/useProducts";
import { ProductsCardGrid } from "./components/ProductsCardGrid";
import { Products } from "./components/Products";
import { Menu } from "./components/Menu";

export default function App() {
  globalStyles();
  const { productsByTags, productsByIds } = useProducts({
    storeId: "grosse-theaterstrasse-store"
  });

  return (
    <Products>
      <Menu
        title="Bowls"
        subtitle="Schmecken kalt und warm"
        description="Kreative und gesunde Bowls. Nur aus den besten Zutaten."
      >
        <ProductsCardGrid list={productsByTags(["product.bowl"])} horizontal />
      </Menu>

      <Menu
        title="Salate"
        description="Spannende und hochwertige Salate mit hauseigenen Dressings."
      >
        <ProductsCardGrid list={productsByTags(["product.salad"])} />
      </Menu>

      <Menu
        title="Sides"
        description="Verschiedene Sides. Perfekt zum Dazubestellen."
      >
        <ProductsCardGrid
          list={productsByTags(["product.side", "addon.bread"])}
        />
      </Menu>

      <Menu
        title="Desserts"
        description="Leckere Desserts ohne raffinierten Zucker aus frischen Zutaten."
      >
        <ProductsCardGrid list={productsByTags(["product.dessert"])} />
      </Menu>

      <Menu
        title="Getränke"
        description="Erfrischende Getränke mit leckeren Zutaten."
      >
        <ProductsCardGrid
          list={productsByIds([
            "homemade-flavored-water-himbeere",
            "ingwer-shot",
            "homemade-flavored-water",
            "energy-shot"
          ])}
        />
      </Menu>
    </Products>
  );
}
