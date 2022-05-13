import { useState, useEffect, useRef } from "react";
import axios from "axios";

type ApiProps = {
  storeId: "grosse-theaterstrasse-store" | "friedrichstrasse-delivery";
};

// https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/
// https://blog.logrocket.com/modern-api-data-fetching-methods-react/
// TODO: create interface Product for replacing use of <any> (line: 12,13,34,49)
export const useProducts = ({ storeId }: ApiProps) => {
  const cache = useRef<any>({});
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // fetch all data and store in cache
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      if (cache.current.id === storeId) {
        setData(cache.current);
        setIsLoading(false);
        console.log("fetched from cache", cache.current);
      } else {
        try {
          const result = await axios(
            `https://api.stadtsalat.de/shop/${storeId}`
          );

          // https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
          result.data.products.sort((a: any, b: any) =>
            a.sorting > b.sorting ? 1 : -1
          );

          setData(result.data);
          cache.current = result.data;
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, [storeId]);

  const productsByTags = (productTags: string[]) => {
    return (
      data.products &&
      data.products.filter((product: any) =>
        productTags.some((t) => product.productTags.includes(t))
      )
    );
  };

  const productsByIds = (ids: string[]) => {
    return (
      data.products &&
      data.products.filter((product: any) =>
        ids.some((t) => product.id.includes(t))
      )
    );
  };

  return { data, productsByTags, productsByIds, isLoading, isError };
};
