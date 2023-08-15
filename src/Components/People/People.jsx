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
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [selectedK, setSelectedK] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useEffect(() => {
  //   axios.get('https://swapi.dev/api/people/')
  //     .then(response => {
  //       setPeople(response.data.results);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

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
        setPeople(nextPageData.results);
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
        setPeople(previousPageData.results);
        setCurrentPage(currentPage - 1);
      }
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const initialData = await fetchData('https://swapi.dev/api/people/');
      if (initialData) {
        setNextPageUrl(initialData.next);
        setPreviousPageUrl(initialData.previous);
        setPeople(initialData.results);
        setTotalPages(Math.ceil(initialData.count / initialData.results.length));
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

  const handleFilmClick = (peop, img_link) => {
    setSelectedFilm(peop);
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
              <div className="film-item" key={k} onClick={() => handleFilmClick(peop, `https://picsum.photos/id/${(k + 10) * currentPage}/300/200`)}>
                <img className='img'
                  src={`https://picsum.photos/id/${(k + 10) * currentPage}/300/200`}
                  alt={peop.name} />
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
                {people.map((peop, k) => (
                  <tr key={k} onClick={() => handleFilmClick(peop, `https://picsum.photos/id/${(k+10)*currentPage}/300/200`)}>
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
        <div className='pagination'>
          <button className='page-but' onClick={handlePreviousPage} disabled={!previousPageUrl}>
            Prev
          </button>
          <span className='page-no'>Page {currentPage} of {totalPages}</span>
          <button className='page-but' onClick={handleNextPage} disabled={!nextPageUrl}>
            Next
          </button>
          <Sidebar peop={selectedFilm} onClose={handleCloseSidebar} link={selectedK} />
        </div>
      </div>
    </div>
  )
}


export default People
