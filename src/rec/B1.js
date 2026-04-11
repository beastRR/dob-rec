import React from "react";
import shivam from "./556845.pdf";
import "../style.css";

 

const b1=()=>(
    <div className="text-center main">
        <div>
            <div className="text-center box">
{/*// <img className="bg" src={shivam} alt="data" />*/}
     <embed
        src={shivam}
        type="application/pdf"
        width="100%"
        height="100%"
      />
            </div>
        </div>
        {/* <div>
            <button></button>
        </div> */}

    </div>
);

export default b1;
