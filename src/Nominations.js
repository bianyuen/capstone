import React from 'react'
import './Nominations.css';
import ReactDOM from 'react-dom';

function Nominations() {
  return (
      <>
    <form>
    <h1>Customer Nomination Form</h1>
    <p>Customer Name: <input type="text"/> </p>
    <p>Rep Email: <input type="text"/> </p>
    <p>Use Case: <input type="text"/> </p>
    <p>Business Sector: <input type="text"/> </p>
    <p>Customer Contact: <input type="text"/> </p>
    <br></br>
  </form>

  <button>Submit Nomination</button>
  </>


    
  )
}

export default Nominations;