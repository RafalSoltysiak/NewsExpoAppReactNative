import CountryList from "@/constants/CountryList";
import { useCallback, useState } from "react";

export function useNewsCountry() {
  const [newsCountries, setNewsCountries] = useState(CountryList);

  const toggleNewsCountry = useCallback(function (id: number) {
    setNewsCountries((prevNewsCountries) => {
      return prevNewsCountries.map((item, index) => {
        if (index === id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      });
    });
  }, []);

  return {
    newsCountries,
    toggleNewsCountry,
  };
}
