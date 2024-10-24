import GridCountries from './components/gridCountries';
import Navbar from './components/navbar';
import SearchCountryInput from './components/searchCountryInput';
import { SearchProvider } from './context/SearchContext';
import './index.css';
import './typhography.css';

function App() {
  return (
    <SearchProvider>
      <Navbar />
      <SearchCountryInput />
      <div className='background-[#fafafa]'>
        <GridCountries />
      </div>
    </SearchProvider>
  );
}

export default App;
