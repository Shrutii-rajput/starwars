import React from 'react';
import './Sidebar.css';

const Sidebar = ({ film, onClose }) => {
  return (
    <div className={`sidebar ${film ? '' : 'hidden'}`}>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      {film ? (
        <>
          <img className="film-image" src={`${film.episode_id}.jpg`} alt={film.title} />
          <h2>{film.title}</h2>
          <p>
            <strong>Release Date:</strong> {film.release_date}
          </p>
          <p>
            <strong>Director:</strong> {film.director}
          </p>
          <p>
            <strong>Opening Crawl:</strong> {film.opening_crawl}
          </p>
          <p>
            <strong>Episode ID:</strong> {film.episode_id}
          </p>
        </>
      ) : (
            ""
      )}
    </div>
  );
};

export default Sidebar;

