import React from 'react';
import '../../index.css';
import Sidebar from './Sidebar_people';
import { useState, useEffect } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';
import ListIcon from '@mui/icons-material/List';
import axios from 'axios';

const People = () => {
  const [people, setPeople] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setPeople(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilmClick = (peop) => {
    setSelectedFilm(peop);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSelectedFilm(null);
    setSidebarOpen(false);
  };

  return (
    <div className={`films-contain ${sidebarOpen ? 'sidebar-open' : '.sidebar-close'}`}>
      <nav className='head'>
        <h3>People</h3>
        <div className='toggle'>
          <button className={`grid ${isGridView ? 'active' : ''}`} onClick={() => setIsGridView(true)}>
            {isGridView ? <ViewModuleIcon /> : <ViewModuleIcon />}
            {isGridView ? 'Grid' : ''}
          </button>
          <button className={`list ${!isGridView ? 'active' : ''}`} onClick={() => setIsGridView(false)}>
            {!isGridView ? <ReorderIcon /> : <ReorderIcon />}
            {!isGridView ? 'List' : ''}
          </button>
        </div>
      </nav>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={`film-container ${isGridView ? 'grid-view' : 'list-view'}`}>
            {people.map((peop, k) => (
              <div className="film-item" key={k} onClick={() => handleFilmClick(peop)}>
                <img className='img' src={`peop_${peop.name}.jpg`} alt={peop.name} />
                <div className='film-inf'>
                  <div className='film-left'>
                    <img src=".\Users.png" alt="" />
                    <div className='ftr'>
                      <h4>{peop.name}</h4>
                    </div>
                  </div>
                  <button className='film-right'><ListIcon /></button>
                </div>
              </div>
            ))}
            <div className='table-container'>
            <table>
              <tr className='table-head'>
                <th className='name'>Name</th>
                <th className='director'>Birth Year</th>
                <th className='date'>Height</th>
                <th className='icon'></th>
              </tr>
              {people.map((peop,k) => (
                <tr key={k} onClick={() => handleFilmClick(peop)}>
                <td className='name'>
                  <div className='title-con'>
                  <img src=".\Users.png" alt="" /><span className='title'>
                  {peop.name}</span>
                  </ div>
                </td>
                <td className='director'>{peop.birth_year}</td>
                <td className='date'>{peop.height}</td>
                <td className='icon'><button className='film-right'><ListIcon /></button></td>
              </tr>
              ))}
            </table>
              </div>
          </div>
        )} 
        <Sidebar peop={selectedFilm} onClose={handleCloseSidebar} />
        </div>
    </div>
  )
}


export default People
