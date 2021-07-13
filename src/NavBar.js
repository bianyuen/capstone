// src/Title.js

// import './Title.css';
import React from 'react'
import './NavBar.css';

function NavBar() {
  return (
    <div class = 'topnav'>
      <a class="active" href="/Home">Home</a>
      <a href="/Videos">Videos</a>
      <a href="/Nominations">Nominations</a>
      <a href="/Contactus">Contact Us</a>
      <br></br><br></br>
      <hr></hr>
    </div>
  )
}

export default NavBar