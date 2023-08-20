import React from 'react';
import '../../index.css';
import Sidebar from './Sidebar_film';
import { useState, useEffect } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';
import ListIcon from '@mui/icons-material/List';
import axios from 'axios';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        setFilms(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSelectedFilm(null);
    setSidebarOpen(false);
  };

  return (
    <div className={`films-contain ${sidebarOpen ? 'sidebar-open' : '.sidebar-close'}`}>
      <nav className='head'>
        <h3>Films</h3>
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
            {films.map((film, episode_id) => (
              <div className="film-item hide" key={episode_id} onClick={() => handleFilmClick(film)}>
                <img className='img' src={`Films_${film.episode_id}.jpg`} alt={film.title} />
                <div className='film-inf'>
                  <div className='film-left'>
                    <img src=".\FilmReel.png" alt="" />
                    <div className='ftr'>
                      <h4>{film.title}</h4>
                      <h6>{film.release_date}</h6>
                    </div>
                  </div>
                  {/* <button className='film-right'><ListIcon /></button> */}
                </div>
              </div>
            ))}
            <div className='table-container'>
            <table>
              <tr className='table-head'>
                <th className='name'>Name</th>
                <th className='director'>Director</th>
                <th className='date'>Release Date</th>
                {/* <th className='icon'></th> */}
              </tr>
              {films.map((film, episode_id) => (
                <tr className='hide' key={episode_id} onClick={() => handleFilmClick(film)}>
                <td className='name'>
                  <div className='title-con'>
                  <img src=".\FilmReel.png" alt="" /><span className='title'>
                  {film.title}</span>
                  </ div>
                </td>
                <td className='director'>{film.director}</td>
                <td className='date'>{film.release_date}</td>
                {/* <td className='icon'><button className='film-right'><ListIcon /></button></td> */}
              </tr>
              ))}
            </table>
              </div>
          </div>
        )} 
        <Sidebar film={selectedFilm} onClose={handleCloseSidebar} />
        </div>
    </div>
  )
}

export default Films
