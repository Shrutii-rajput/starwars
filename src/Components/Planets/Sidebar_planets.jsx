import React from 'react';
import '../Sidebar.css';

const Sidebar_planets = ({ planet, onClose, link}) => {
  return (
    <div className={`sidebar ${planet ? '' : 'hidden'}`}>
      <div className='side-head'><h3 className='heading'>Planet details</h3>
      <button className="close-btn" onClick={onClose}>
        X
      </button></div> <hr />
      {planet ? (
        <div className='side-body'>
          <p>Image</p>
          <img className="film-image"
          src={link}
          alt={planet.name} />
          <p>Name</p>
          <div className='side-box'>{planet.name}</div>
          <p>Rotation period</p>
          <div className='side-box'>{planet.rotation_period}</div>
          <p>Orbital period</p>
          <div className='side-box'>{planet.orbital_period}</div>
          <p>Diameter</p>
          <div className='side-box'>{planet.diameter}</div>
          <p>Climate</p>
          <div className='side-box'>{planet.climate}</div>
          <p>Gravity</p>
          <div className='side-box'>{planet.gravity}</div>
          <p>Terrain</p>
          <div className='side-box'>{planet.terrain}</div>
          <p>Surface water</p>
          <div className='side-box'>{planet.surface_water}</div>
          <p>Population</p>
          <div className='side-box'>{planet.population}</div>
        </ div>
      ) : (
            ""
      )}
      <hr />
      <button className='close-btn-end' onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar_planets;
