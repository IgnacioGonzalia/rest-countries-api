import '../typhography.css';
import { CountryData } from '../utils/types';

interface CountryCardProps {
  countryData: CountryData;
}

const CountryCard = ({ countryData }: CountryCardProps) => {
  const darkTextColor = 'text-[#111517]';

  const formatNumberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const manageClick = () => {
    console.log(`click`);
  }

  return (
    <div className='w-[16.5rem] flex flex-col rounded-md shadow-xl' onClick={manageClick}>
      <img src={countryData.flags.svg} alt={`${countryData.name} flag`} className='rounded-t-md w-[16.5rem] h-40 object-cover' />
      <div className='mx-6'>
        <h2 className={`mt-6 nunito-sans-800 text-lg leading-[1.625rem] ${darkTextColor}`}>{countryData.name}</h2>
        <div className='mt-4 mb-11 flex flex-col gap-2 text-sm leading-[.875rem] nunito-sans-600'>
          <p>Population: <span className='nunito-sans-300'>{formatNumberWithCommas(countryData.population)}</span></p>
          <p>Region: <span className='nunito-sans-300'>{countryData.region}</span></p>
          <p>Capital: <span className='nunito-sans-300'>{countryData.capital}</span></p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
