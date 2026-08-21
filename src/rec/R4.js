import React from "react";
import SOU from "./R9.jpg";
import "../style.css";
import service from "./crs-logo.png";

const r4=()=>(
    <div>
    <div style={{ width:'50%' , height:'50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={service} alt="Centered" />
    </div>
        <div>
            <div className="text-center box">
                <img className="bg" src={SOU} alt="data" style={{width:'40%', height:'40%'/>
            </div>
        </div>
        {/* <div>
            <button></button>
        </div> */}

    </div>
);

export default r4;
