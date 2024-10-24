import data from '../data.json';
import CountryCard from './countryCard';
import { CountryData } from '../utils/types';

const GridCountries = () => {
  return (
    <div className='max-w-7xl mx-auto mt-20'>
      <div className='flex flex-row flex-wrap gap-x-16 gap-y-10 items-center justify-center'>
        {
          (data as CountryData[]).map((country) => (
            <CountryCard countryData={country} key={country.alpha3Code} />
          ))
        }
      </div>
    </div>
  );
}

export default GridCountries;
