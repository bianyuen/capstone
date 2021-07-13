// src/Title.js

import aws_logo from './logo.png';

import './Title.css';
import React from 'react'

function Title() {
  return (
    <div className="Title">
      <img src={aws_logo} height = "100" />
    </div>
  )
}

export default Title