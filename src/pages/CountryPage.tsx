import { useParams } from "react-router-dom";
import { Country } from "../interfaces/Country";
import { Flex, Typography } from "antd";
import CountryData from "../data/data.json";

const CountryPage = () => {
  const { name } = useParams();
  const { Text } = Typography;

  const country = CountryData.find((country: Country) => {
    return country?.name?.toLowerCase() === name?.toLowerCase();
  });

  return (
    <Flex
      justify="center"
      align="center"
      className="min-h-lvh bg-[color:var(--bg)] transition-colors duration-300"
    >
      <Text>{country?.name}</Text>
    </Flex>
  );
};

export default CountryPage;
