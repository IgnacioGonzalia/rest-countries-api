import data from '../data.json';
import CountryCard from './countryCard';
import { CountryData } from '../utils/types';

const GridCountries = () => {
  return (
    <div className='w-100 flex flex-col items-center gap-10'>
      {
        (data as CountryData[]).map((country) => (
          <CountryCard countryData={country} key={country.alpha3Code} />
        ))
      };
    </div>
  );
}

export default GridCountries;
