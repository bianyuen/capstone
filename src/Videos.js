import React from 'react'
import './Videos.css';
import ReactDOM from 'react-dom';

function Videos() {
  return (
      <>
      <br></br>
      <video-margin>
      <iframe width="602" height="338" src="https://www.youtube.com/embed/rDQpc-A7iD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </video-margin>
      <video-margin>
      <iframe width="602" height="338" src="https://www.youtube.com/embed/b6L2bllBIxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </video-margin>
      <br></br> <br></br>
      <video-margin>
      <iframe width="602" height="338" src="https://www.youtube.com/embed/xyuNrGXSy88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </video-margin>
      <video-margin>
      <iframe width="602" height="338" src="https://www.youtube.com/embed/ulMRGcmQTNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </video-margin>
      </>


    
  )
}

export default Videos;