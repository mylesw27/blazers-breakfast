import React from 'react';
import './logo.css'

function Logo() {
  return (
    <div>
      <a href="localhost:3000"> 
       <img src={require('./sample-logo.png')} class="logo-style"/>
      </a>
       <h2 class="restaurant-name">Blazer's Breakfast</h2>
    </div>
  );
}

export default Logo;