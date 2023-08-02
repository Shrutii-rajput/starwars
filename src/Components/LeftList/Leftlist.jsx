import React from 'react'
import { Link } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Leftlist = () => {
  return (
    <div>
      <nav className='list-left'>
        <ul>
        <li>
          <Link to="/" className='linksty'><button className='hello'><div className='content'>
            <FolderIcon className='folder' />
            <span>Home</span>
          </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
          <Link to="/films" className='linksty'><button className='hello'><div className='content'>
            <FolderIcon className='folder' />
            <span>Films</span>
          </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
          <Link to="/people" className='linksty'><button className='hello'><div className='content'>
            <FolderIcon className='folder' />
            <span>People</span>
          </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
          <Link to="/planets" className='linksty'><button className='hello'><div className='content'>
            <FolderIcon className='folder' />
            <span>Planets</span>
          </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
          <Link to="/species" className='linksty'><button className='hello'><div className='content'>
            <FolderIcon className='folder' />
            <span>Species</span>
          </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
          <Link to="/starships" className='linksty'><button className='hello'><div className='content'>
            <FolderIcon className='folder' />
            <span>Starships</span>
          </div><div className='arrow'>&gt;</div></button></Link>
          </li>
          <li>
          <Link to="/vehicles" className='linksty'><button className='hello'><div className='content'>
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
