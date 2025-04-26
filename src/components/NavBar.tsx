import { Button, Flex, Typography } from "antd";
import { useThemeStore } from "../store/themeStore";
import MoonIcon from "../assets/moon-icon.svg";
import FilledMoonIcon from "../assets/filled-moon-icon.svg";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { Title } = Typography;
  const Icon = darkMode ? FilledMoonIcon : MoonIcon;

  return (
    <Flex
      align="center"
      justify="space-between"
      className="w-full bg-[color:var(--component-bg)] shadow-lg !px-4 !py-7 md:!px-20 md:!py-6"
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
          <img src={Icon} alt="Toggle" className="w-4 h-4 lg:w-5 lg:h-5" />
          <p className="text-xs lg:text-base">Dark Mode</p>
        </Flex>
      </Button>
    </Flex>
  );
};

export default Navbar;
