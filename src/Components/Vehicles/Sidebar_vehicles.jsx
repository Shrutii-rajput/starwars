import React from 'react';
import '../Sidebar.css';

const Sidebar_vehicles = ({ vehicle, onClose, link }) => {
  return (
    <div className={`sidebar ${vehicle ? '' : 'hidden'}`}>
      <div className='side-head'><h3 className='heading'>Vehicle details</h3>
      <button className="close-btn" onClick={onClose}>
        X
      </button></div> <hr />
      {vehicle ? (
        <div className='side-body'>
          <p>Image</p>
          <img className="film-image" 
          src={link}
          alt={vehicle.name} />
          <p>Name</p>
          <div className='side-box'>{vehicle.name}</div>
          <p>Model</p>
          <div className='side-box'>{vehicle.model}</div>
          <p>Manufacturer</p>
          <div className='side-box'>{vehicle.manufacturer}</div>
          <p>Cost in credits</p>
          <div className='side-box'>{vehicle.cost_in_credits}</div>
          <p>Length</p>
          <div className='side-box'>{vehicle.length}</div>
          <p>Max atmosphering speed</p>
          <div className='side-box'>{vehicle.max_atmosphering_speed}</div>
          <p>Crew</p>
          <div className='side-box'>{vehicle.crew}</div>
          <p>Passengers</p>
          <div className='side-box'>{vehicle.passengers}</div>
          <p>Cargo capacity</p>
          <div className='side-box'>{vehicle.cargo_capacity}</div>
          <p>Consumables</p>
          <div className='side-box'>{vehicle.consumables}</div>
          <p>Vehicle class</p>
          <div className='side-box'>{vehicle.starship_class}</div>
        </ div>
      ) : (
            ""
      )}
      <hr />
      <button className='close-btn-end' onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar_vehicles;
