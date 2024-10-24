import SearchIcon from '../assets/search-outline.svg';
import { useSearch } from '../context/SearchContext';

const SearchCountryInput = () => {
  const { setSearchTerm } = useSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className='bg-white rounded-md mt-6 w-80 m-auto flex flex-row items-center justify-center px-9 py-4 gap-6 shadow-md'>
      <img src={SearchIcon} alt='Search icon' className='h-4 w-4 fill-[#B2B2B2]' />
      <input
        type='text'
        placeholder='Search for a country…'
        className='text-[#C4C4C4] placeholder:text-[#C4C4C4] focus:outline-none focus:ring-0 focus:border-none active:border-none'
        onChange={handleChange} />
    </div>
  );
}

export default SearchCountryInput;
