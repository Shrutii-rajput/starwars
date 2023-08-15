import React from 'react';
import '../../index.css';
import Sidebar from './Sidebar_planets';
import { useState, useEffect } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';
import ListIcon from '@mui/icons-material/List';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedK, setSelectedK] = useState(null);
  const [isGridView, setIsGridView] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const handleNextPage = async () => {
    if (nextPageUrl) {
      const nextPageData = await fetchData(nextPageUrl);
      if (nextPageData) {
        setNextPageUrl(nextPageData.next);
        setPreviousPageUrl(nextPageData.previous);
        setPlanets(nextPageData.results);
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const handlePreviousPage = async () => {
    if (previousPageUrl) {
      const previousPageData = await fetchData(previousPageUrl);
      if (previousPageData) {
        setNextPageUrl(previousPageData.next);
        setPreviousPageUrl(previousPageData.previous);
        setPlanets(previousPageData.results);
        setCurrentPage(currentPage - 1);
      }
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const initialData = await fetchData('https://swapi.dev/api/planets/');
      if (initialData) {
        setNextPageUrl(initialData.next);
        setPreviousPageUrl(initialData.previous);
        setPlanets(initialData.results);
        setTotalPages(Math.ceil(initialData.count / initialData.results.length));
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

  const handleFilmClick = (planet, img_link) => {
    setSelectedK(img_link);
    setSelectedFilm(planet);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSelectedFilm(null);
    setSidebarOpen(false);
  };

  return (
    <div className={`films-contain ${sidebarOpen ? 'sidebar-open' : '.sidebar-close'}`}>
      <nav className='head'>
        <h3>Planets</h3>
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
            {planets.map((planet, k) => (
              <div className="film-item" key={k} onClick={() => handleFilmClick(planet, `https://picsum.photos/id/${(k+20)*currentPage}/300/200`)}>
                <img className='img'
                src={`https://picsum.photos/id/${(k+20)*currentPage}/300/200`}
                alt={planet.name} />
                <div className='film-inf'>
                  <div className='film-left'>
                    <img src=".\Planet.png" alt="" />
                    <div className='ftr'>
                      <h4>{planet.name}</h4>
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
                <th className='director'>Climate</th>
                <th className='date'>Gravity</th>
                <th className='icon'></th>
              </tr>
              {planets.map((planet,k) => (
                <tr key={k} onClick={() => handleFilmClick(planet, `https://picsum.photos/id/${(k+20)*currentPage}/300/200`)}>
                <td className='name'>
                  <div className='title-con'>
                  <img src=".\Planet.png" alt="" /><span className='title'>
                  {planet.name}</span>
                  </ div>
                </td>
                <td className='director'>{planet.climate}</td>
                <td className='date'>{planet.gravity}</td>
                <td className='icon'><button className='film-right'><ListIcon /></button></td>
              </tr>
              ))}
            </table>
              </div>
          </div>
        )} 
        <div className='pagination'>
        <button className='page-but' onClick={handlePreviousPage} disabled={!previousPageUrl}>
          Prev
        </button>
        <span className='page-no'>Page {currentPage} of {totalPages}</span>
        <button className='page-but' onClick={handleNextPage} disabled={!nextPageUrl}>
          Next
        </button>
        </div>
        <Sidebar planet={selectedFilm} onClose={handleCloseSidebar} link={selectedK}/>
        </div>
    </div>
  )
}


export default Planets
