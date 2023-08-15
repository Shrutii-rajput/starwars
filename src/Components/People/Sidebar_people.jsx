import React from 'react';
import '../Sidebar.css';

const Sidebar_people = ({ peop, onClose, link}) => {
  return (
    <div className={`sidebar ${peop ? '' : 'hidden'}`}>
      <div className='side-head'><h3 className='heading'>Character details</h3>
      <button className="close-btn" onClick={onClose}>
        X
      </button></div> <hr />
      {peop ? (
        <div className='side-body'>
          <p>Image</p>
          <img className="film-image" src={link} alt={peop.name} />
          <p>Name</p>
          <div className='side-box'>{peop.name}</div>
          <p>Height</p>
          <div className='side-box'>{peop.height}</div>
          <p>Mass</p>
          <div className='side-box'>{peop.mass}</div>
          <p>Hair color</p>
          <div className='side-box'>{peop.hair_color}</div>
          <p>Skin color</p>
          <div className='side-box'>{peop.skin_color}</div>
          <p>Eye color</p>
          <div className='side-box'>{peop.eye_color}</div>
          <p>Birth year</p>
          <div className='side-box'>{peop.birth_year}</div>
          <p>Gender</p>
          <div className='side-box'>{peop.gender}</div>
        </ div>
      ) : (
            ""
      )}
      <hr />
      <button className='close-btn-end' onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar_people;

