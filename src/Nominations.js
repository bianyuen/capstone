import React from 'react'
import './Nominations.css';
import ReactDOM from 'react-dom';

function Nominations() {
  return (
      <>
      <h1> Customer Nomination Form</h1>
    <form>
    <label for="fname">Customer Name <br></br> </label> <input type="text" id="fname" name="firstname" placeholder="Customer Company Full Name"></input> <br></br>
    <label for="fname">Representative Email <br></br> </label> <input type="text" id="fname" name="firstname" placeholder="Your full Amazon Email"></input> <br></br>
    <label for="fname">Use Case <br></br> </label> <input type="text" id="fname" name="firstname" placeholder="Connect/ Migrations/ Analytics..."></input> <br></br>
    <label for="fname">Business Sector <br></br> </label> <input type="text" id="fname" name="firstname" placeholder="ENT/ SMB/ ISV..."></input> <br></br>
    <label for="fname">Customer Email <br></br> </label> <input type="text" id="fname" name="firstname" placeholder="Interviewee Email Address"></input> <br></br>
    <br></br>
  </form>

  <input type="submit" value="Submit Nomination"></input>
  </>


    
  )
}

export default Nominations;