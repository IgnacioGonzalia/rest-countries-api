import { Flex } from "antd";
import countriesData from "../data/data.json";
import CountryCard from "./CountryCard";

const CountryGrid = () => {
  return (
    <Flex
      vertical={false}
      align="center"
      justify="center"
      wrap
      className="!mx-auto !mt-8 !gap-10 !pb-10 md:!gap-[75px] max-w-7xl md:!mt-12"
    >
      {countriesData.map((country) => (
        <CountryCard country={country} key={country.alpha3Code} />
      ))}
    </Flex>
  );
};

export default CountryGrid;
