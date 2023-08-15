import React from 'react';
import '../Sidebar.css';

const Sidebar_starships = ({ starship, onClose, link }) => {
  return (
    <div className={`sidebar ${starship ? '' : 'hidden'}`}>
      <div className='side-head'><h3 className='heading'>Starship details</h3>
      <button className="close-btn" onClick={onClose}>
        X
      </button></div> <hr />
      {starship ? (
        <div className='side-body'>
          <p>Image</p>
          <img className="film-image" 
          src={link}
          alt={starship.name} />
          <p>Name</p>
          <div className='side-box'>{starship.name}</div>
          <p>Model</p>
          <div className='side-box'>{starship.model}</div>
          <p>Manufacturer</p>
          <div className='side-box'>{starship.manufacturer}</div>
          <p>Cost in credits</p>
          <div className='side-box'>{starship.cost_in_credits}</div>
          <p>Length</p>
          <div className='side-box'>{starship.length}</div>
          <p>Max atmosphering speed</p>
          <div className='side-box'>{starship.max_atmosphering_speed}</div>
          <p>Crew</p>
          <div className='side-box'>{starship.crew}</div>
          <p>Passengers</p>
          <div className='side-box'>{starship.passengers}</div>
          <p>Cargo capacity</p>
          <div className='side-box'>{starship.cargo_capacity}</div>
          <p>Hyperdrive rating</p>
          <div className='side-box'>{starship.hyperdrive_rating}</div>
          <p>Consumables</p>
          <div className='side-box'>{starship.consumables}</div>
          <p>MGLT</p>
          <div className='side-box'>{starship.MGLT}</div>
          <p>Starship class</p>
          <div className='side-box'>{starship.starship_class}</div>
        </ div>
      ) : (
            ""
      )}
      <hr />
      <button className='close-btn-end' onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar_starships;
