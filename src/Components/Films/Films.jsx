import React from 'react';
import './Films.css';
import '../../index.css';
import { useState, useEffect } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';
import ListIcon from '@mui/icons-material/List';
import axios from 'axios';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        console.log(response);
        setFilms(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);




  return (
    <div>
      <nav className='head'>
        <h3>Films</h3>
      <div className='toggle'>
        <button className={`grid ${isGridView ? 'active' : ''}`} onClick={() => setIsGridView(true)}>
          {isGridView ? <ViewModuleIcon />: <ViewModuleIcon />}
          {isGridView ? 'Grid': ''}
        </button>
        <button className={`list ${!isGridView ? 'active' : ''}`}  onClick={() => setIsGridView(false)}>
          {!isGridView ? <ReorderIcon />: <ReorderIcon />}
          {!isGridView ? 'List': ''}
        </button>
      </div>
      </nav>
      <div className={`film-container ${isGridView ? 'grid-view' : 'list-view'}`}>
        {films.map((film, episode_id) => (
         <div className="film-item" key={episode_id}>
            <img src='https://picsum.photos/' alt={film.title} />
            <h2>{film.title}</h2>
            <p>{film.release_date}</p>
            {/* <select>
              <option value=""><ListIcon /></option>
              <option value="action1">Action 1</option>
              <option value="action2">Action 2</option>
            </select> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Films
