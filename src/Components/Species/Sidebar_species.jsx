import React from 'react';
import '../Sidebar.css';

const Sidebar_species = ({ specie, onClose, link }) => {
  return (
    <div className={`sidebar ${specie ? '' : 'hidden'}`}>
      <div className='side-head'><h3 className='heading'>Specie details</h3>
      <button className="close-btn" onClick={onClose}>
        X
      </button></div> <hr />
      {specie ? (
        <div className='side-body'>
          <p>Image</p>
          <img className="film-image" 
          src={link}
          alt={specie.name} />
          <p>Name</p>
          <div className='side-box'>{specie.name}</div>
          <p>Classification</p>
          <div className='side-box'>{specie.classification}</div>
          <p>Designation</p>
          <div className='side-box'>{specie.designation}</div>
          <p>Average height</p>
          <div className='side-box'>{specie.average_height}</div>
          <p>Skin colors</p>
          <div className='side-box'>{specie.skin_colors}</div>
          <p>Hair colors</p>
          <div className='side-box'>{specie.hair_colors}</div>
          <p>Eye colors</p>
          <div className='side-box'>{specie.eye_colors}</div>
          <p>Average lifespan</p>
          <div className='side-box'>{specie.average_lifespan}</div>
          <p>Language</p>
          <div className='side-box'>{specie.language}</div>
        </ div>
      ) : (
            ""
      )}
      <hr />
      <button className='close-btn-end' onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar_species;
