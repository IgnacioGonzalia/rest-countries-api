import { Flex, Typography, Image } from "antd";
import countriesData from "../data/data.json";

const CountryCard = () => {
  const data = countriesData;
  const { Title, Text } = Typography;
  const country = data[0];

  const printData = (data: string) => {
    const mappings: { [key: string]: any } = {
      Population: country.population.toLocaleString(),
      Region: country.region,
      Capital: country.capital,
    };
    return (
      <Text className="!text-sm !font-semibold">
        {`${data}: `}
        <span className="!font-light">{mappings[data]}</span>
      </Text>
    );
  };

  return (
    <Flex
      align="center"
      justify="center"
      vertical
      className="!mt-10 !mx-auto w-[264px] bg-[color:var(--component-bg)] rounded-[5px] shadow-xl"
    >
      <Image
        src={country.flag}
        alt={`${country.name} flag`}
        className="!rounded-t-[5px]"
      />
      <Flex align="start" gap={16} vertical className="!p-6 !pb-11 !w-full">
        <Title level={2} className="!mb-0 !text-xl !font-extrabold">
          {country.name}
        </Title>
        <Flex vertical gap={8}>
          {printData("Population")}
          {printData("Region")}
          {printData("Capital")}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CountryCard;
