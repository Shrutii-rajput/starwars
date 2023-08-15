import React from 'react';
import '../../index.css';
import Sidebar from './Sidebar_vehicles';
import { useState, useEffect } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';
import ListIcon from '@mui/icons-material/List';
import axios from 'axios';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
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
        setVehicles(nextPageData.results);
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
        setVehicles(previousPageData.results);
        setCurrentPage(currentPage - 1);
      }
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const initialData = await fetchData('https://swapi.dev/api/starships/');
      if (initialData) {
        setNextPageUrl(initialData.next);
        setPreviousPageUrl(initialData.previous);
        setVehicles(initialData.results);
        setTotalPages(Math.ceil(initialData.count / initialData.results.length));
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

  const handleFilmClick = (vehicle, img_link) => {
    setSelectedFilm(vehicle);
    setSelectedK(img_link);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSelectedFilm(null);
    setSidebarOpen(false);
  };

  return (
    <div className={`films-contain ${sidebarOpen ? 'sidebar-open' : '.sidebar-close'}`}>
      <nav className='head'>
        <h3>Vehicles</h3>
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
            {vehicles.map((vehicle, k) => (
              <div className="film-item" key={k} onClick={() => handleFilmClick(vehicle, `https://picsum.photos/id/${(k+50)*currentPage}/300/200`)}>
                <img className='img' 
                src={`https://picsum.photos/id/${(k+50)*currentPage}/300/200`} 
                alt={vehicle.name} />
                <div className='film-inf'>
                  <div className='film-left'>
                    <img src=".\CarProfile.png" alt="" />
                    <div className='ftr'>
                      <h4>{vehicle.name}</h4>
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
                <th className='director'>Model</th>
                <th className='date'>Manufacturer</th>
                <th className='icon'></th>
              </tr>
              {vehicles.map((vehicle,k) => (
                <tr key={k} onClick={() => handleFilmClick(vehicle, `https://picsum.photos/id/${(k+50)*currentPage}/300/200`)}>
                <td className='name'>
                  <div className='title-con'>
                  <img src=".\CarProfile.png" alt="" /><span className='title'>
                  {vehicle.name}</span>
                  </ div>
                </td>
                <td className='director'>{vehicle.model}</td>
                <td className='date'>{vehicle.manufacturer}</td>
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
        <Sidebar vehicle={selectedFilm} onClose={handleCloseSidebar} link={selectedK}/>
        </div>
    </div>
  )
}


export default Vehicles


