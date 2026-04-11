import React from "react";
import shivam from "./556845.jpg";
import "../style.css";
import logo from "./crs-logo.png";

 

const b1=()=>(
    <div className="text-center main">
        <div>
     <div className="text-center main" style={{ display: 'flex',  backgroundColor: '#ADD8E6',          // Enable flexbox
      justifyContent: 'center',  // Horizontal centering
      alignItems: 'center', width: '100%', height: '100px' }}>

        <img src={logo} alt="Centered" style={{ maxWidth: '100%' }} />
{/*<div style={{
      display: 'flex',  backgroundColor: '#ADD8E6',          // Enable flexbox
      justifyContent: 'center',  // Horizontal centering
      alignItems: 'center',      // Vertical centering
      height: '300px',           // Set parent height to see vertical centering
      border: '1px solid black'
    }}>
      
    </div>/*}
      </div><p/>
            <div className="text-center box">
 <img className="bg" src={shivam} alt="data" />
     
            </div>
        </div>
        {/* <div>
            <button></button>
        </div> */}

    </div>
);

export default b1;
