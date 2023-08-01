import React, { useState } from 'react';
import './LeftList/Leftlist.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input className='text'
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className='s-icon' type="submit"><SearchIcon /></button>
    </form>
  );
};

export default SearchBox;

