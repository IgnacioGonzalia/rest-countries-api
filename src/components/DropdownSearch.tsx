import { Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface DropdownSearchProps {
  region: string;
  setRegion: (region: string) => void;
}

const ALL_COUNTRIES = "All countries";

const regions = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  ALL_COUNTRIES,
];

const items: MenuProps["items"] = regions.map((region: string) => ({
  key: region,
  label: <span className="text-xs">{region}</span>,
}));

const CustomDropdownRender = (menu: React.ReactNode) => (
  <div className="bg-[color:var(--component-bg)] text-[color:var(--text)] rounded-md shadow-lg p-2">
    {menu}
  </div>
);

const DropdownSearch = ({ region, setRegion }: DropdownSearchProps) => {
  return (
    <Dropdown
      dropdownRender={CustomDropdownRender}
      menu={{
        items,
        onClick: ({ key }) => {
          key === ALL_COUNTRIES ? setRegion("") : setRegion(key);
        },
      }}
    >
      <button className="!w-52 !bg-[color:var(--component-bg)] text-[color:var(--text)] px-6 py-3 rounded-[5px] shadow-xl text-xs flex items-center justify-between cursor-pointer md:!py-[18px]">
        {region !== "" ? region : "Filter by Region"}
        <DownOutlined />
      </button>
    </Dropdown>
  );
};

export default DropdownSearch;
