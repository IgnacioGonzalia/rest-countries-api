import { Button, Flex, Typography, Image } from "antd";
import { useThemeStore } from "../store/themeStore";
import MoonIcon from "../assets/moon-icon.svg";
import FilledMoonIcon from "../assets/filled-moon-icon.svg";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { Title, Text } = Typography;
  const Icon = darkMode ? FilledMoonIcon : MoonIcon;

  return (
    <div className="w-full bg-[color:var(--component-bg)] shadow-lg">
      <Flex
        align="center"
        justify="space-between"
        className="max-w-7xl !mx-auto !px-4 !py-7 md:!py-6"
      >
        <Title className="!text-[color:var(--text)] !mb-0 !font-extrabold !tracking-wide !text-[14px] lg:!text-2xl">
          Where in the world?
        </Title>

        <Button
          type="text"
          onClick={toggleDarkMode}
          className="hover:!bg-transparent active:!bg-transparent"
        >
          <Flex align="center" justify="center" gap={"8px"}>
            <Image
              src={Icon}
              width={16}
              height={16}
              alt="Toggle"
              preview={false}
              className="lg:!w-5 lg:!h-5"
            />
            <Text className="!text-xs lg:!text-base">Dark Mode</Text>
          </Flex>
        </Button>
      </Flex>
    </div>
  );
};

export default Navbar;
