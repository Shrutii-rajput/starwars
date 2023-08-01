import React from 'react';
import './LeftList/Leftlist.css';
import Searchbox from './Searchbox';

const Navbar = () => {
    const handleSearch = (query) => {
        console.log('Searching for:', query);
      };
  return (
    <div>
      <header className='nav'>
        <img src="./image6.png" alt="" />
        <Searchbox onSearch={handleSearch}/>
      </header>
    </div>
  )
}

export default Navbar
