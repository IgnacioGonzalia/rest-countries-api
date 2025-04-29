import { Flex, Typography, Image } from "antd";
import { Country } from "../interfaces/Country";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { Title, Text } = Typography;
  const navigate = useNavigate();

  const handleClick = () => {
    if (country?.name)
      navigate(`/country/${encodeURIComponent(country.name.toLowerCase())}`);
  };

  const printData = (data: string) => {
    const mappings: { [key: string]: any } = {
      Population:
        country.population !== undefined
          ? country.population.toLocaleString()
          : "-",
      Region: country.region,
      Capital: country.capital ?? "-",
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
      className="w-[260px] bg-[color:var(--component-bg)] rounded-[5px] shadow-xl"
    >
      <Image
        src={country.flags.svg}
        alt={`${country.name} flag`}
        className="!rounded-t-[5px]"
      />
      <Flex
        align="start"
        gap={16}
        vertical
        className="!p-6 !pb-11 !w-full cursor-pointer hover:transform-view"
        onClick={handleClick}
      >
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
