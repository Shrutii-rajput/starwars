import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';

const Leftlist = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('home');
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/') {
      setSelectedItem('home');
    } else if (pathname === '/films') {
      setSelectedItem('films');
    }
    else if (pathname === '/people') {
      setSelectedItem('people');
    }
    else if (pathname === '/planets') {
      setSelectedItem('planets');
    }
    else if (pathname === '/species') {
      setSelectedItem('species');
    }
    else if (pathname === '/starships') {
      setSelectedItem('starships');
    }
    else if (pathname === '/vehicles') {
      setSelectedItem('vehicles');
    }
  }, [location.pathname]);
  return (
    <div>
      <nav className='list-left'>
        <ul>
          <li>
            <Link to="/" className={`linksty ${selectedItem === 'home' ? 'selected' : ''}`}
            ><button className='hello'><div className='content'>
              <FolderIcon className='folder' />
              <span>Home</span>
            </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
            <Link to="/films" className={`linksty ${selectedItem === 'films' ? 'selected' : ''}`}
            ><button className='hello'><div className='content'>
              <FolderIcon className='folder' />
              <span>Films</span>
            </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
            <Link to="/people" className={`linksty ${selectedItem === 'people' ? 'selected' : ''}`}><button className='hello'><div className='content'>
              <FolderIcon className='folder' />
              <span>People</span>
            </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
            <Link to="/planets" className={`linksty ${selectedItem === 'planets' ? 'selected' : ''}`}><button className='hello'><div className='content'>
                <FolderIcon className='folder' />
                <span>Planets</span>
              </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
            <Link to="/species" className={`linksty ${selectedItem === 'species' ? 'selected' : ''}`}><button className='hello'><div className='content'>
                <FolderIcon className='folder' />
                <span>Species</span>
              </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
            <Link to="/starships" className={`linksty ${selectedItem === 'starships' ? 'selected' : ''}`}><button className='hello'><div className='content'>
                <FolderIcon className='folder' />
                <span>Starships</span>
              </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
            <Link to="/vehicles" className={`linksty ${selectedItem === 'vehicles' ? 'selected' : ''}`}><button className='hello'><div className='content'>
                <FolderIcon className='folder' />
                <span>Vehicles</span>
              </div><div className='arrow'>&gt;</div></button></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Leftlist
