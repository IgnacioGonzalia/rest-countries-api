import GridCountries from './components/gridCountries';
import Navbar from './components/navbar';
import './index.css';
import './typhography.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='background-[#fafafa]'>
        <GridCountries />
      </div>
    </>
  );
}

export default App;
