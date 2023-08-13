import React from 'react';
import '../Sidebar.css';

const Sidebar_film = ({ film, onClose }) => {
  return (
    <div className={`sidebar ${film ? '' : 'hidden'}`}>
      <div className='side-head'><h3 className='heading'>Movie details</h3>
      <button className="close-btn" onClick={onClose}>
        X
      </button></div> <hr />
      {film ? (
        <div className='side-body'>
          <p>Image</p>
          <img className="film-image" src={`Films_${film.episode_id}.jpg`} alt={film.title} />
          <p>Title</p>
          <div className='side-box'>{film.title}</div>
          <p>Release Date</p>
          <div className='side-box'>{film.release_date}</div>
          <p>Summary</p>
          <div className='side-box'>{film.opening_crawl}</div>
          <p>Director</p>
          <div className='side-box'>{film.director}</div>
          <p>Producer</p>
          <div className='side-box'>{film.producer}</div>
        </ div>
      ) : (
            ""
      )}
      <hr />
      <button className='close-btn-end' onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar_film;

