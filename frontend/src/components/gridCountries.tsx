import data from '../data.json';
import CountryCard from './countryCard';
import { CountryData } from '../utils/types';

const GridCountries = () => {
  return (
    <div className='max-w-7xl m-auto'>
      <div className='w-100 flex flex-row flex-wrap gap-x-16 gap-y-10 items-start justify-start'>
        {
          (data as CountryData[]).map((country) => (
            <CountryCard countryData={country} key={country.alpha3Code} />
          ))
        };
      </div>
    </div>
  );
}

export default GridCountries;
