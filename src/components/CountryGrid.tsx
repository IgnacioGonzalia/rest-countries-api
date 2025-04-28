import { Flex } from "antd";
import { Country } from "../interfaces/Country";
import CountryCard from "./CountryCard";

const CountryGrid = ({ countries }: { countries: Country[] }) => {
  return (
    <Flex
      vertical={false}
      align="center"
      justify="center"
      wrap
      className="!mx-auto !mt-8 !gap-10 !pb-10 !px-4 md:!gap-[75px] !max-w-7xl md:!mt-12 xl:!px-0"
    >
      {countries.map((country: Country) => (
        <CountryCard country={country} key={country.alpha3Code} />
      ))}
    </Flex>
  );
};

export default CountryGrid;
