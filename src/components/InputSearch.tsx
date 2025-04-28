import { useThemeStore } from "../store/themeStore";
import { Flex, Image, Input } from "antd";
import IconSearch from "../assets/search-icon-gray.svg";
import IconSearchDark from "../assets/search-icon-white.svg";

interface InputSearchProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const InputSearch = ({ inputValue, setInputValue }: InputSearchProps) => {
  const { darkMode } = useThemeStore();
  const Icon = darkMode ? IconSearchDark : IconSearch;

  return (
    <Flex className="bg-[color:var(--component-bg)] !w-[343px] !rounded-[5px] shadow-xl md:!w-md">
      <Input
        placeholder="Search for a country…"
        value={inputValue}
        variant="borderless"
        onChange={(e) => setInputValue(e.target.value)}
        prefix={
          <Image
            src={Icon}
            alt="Search Icon"
            preview={false}
            width={16}
            height={16}
          />
        }
        className="!px-8 !py-4 !placeholder-[color:var(--placeholder)]"
      />
    </Flex>
  );
};

export default InputSearch;
