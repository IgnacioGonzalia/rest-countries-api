import MoonIcon from '../assets/moon-regular.svg';

const Navbar = () => {
  return (
    <div className='h-20 flex flex-row justify-between items-center px-4 sm:px-20 shadow-xl'>
      <p className='nunito-sans-800 text-[#111517] text-sm sm:text-2xl leading-5'>
        Where in the world?
      </p>
      <button type='button' className='flex flex-row gap-2' onClick={() => { console.log('click'); }}>
        <img src={MoonIcon} alt='Moon icon' className='h-4 w-4 sm:h-5 sm:w-5' />
        <p className='nunito-sans-600 text-[#111517] text-xs sm:text-base'>Dark Mode</p>
      </button>
    </div>
  );
}

export default Navbar;
