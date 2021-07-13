// src/Title.js

// import './Title.css';
import React from 'react'
import './NavBar.css';

function NavBar() {
  return (
    <div class = 'topnav'>
      <a class="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#videos">Videos</a>
      <a href="#faq">FAQ</a>
      <a href="#contact us">Contact Us</a>
    </div>
  )
}

export default NavBar