import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='centered'>
    <div class="polaroid">
      <img className='image' src="star-wars.jpg" alt=" " />
        <div class="container">
          <h2>Welcome to Star Wars <br /> Dashboard</h2>
          <br />
          <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
        </div>
    </div>
    </div>
  );
}

export default Dashboard
