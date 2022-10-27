import React from "react";
import demo from "./rec/newDobDemo.jpg";
import "./style.css";

const Demo=()=>(
    <div className="text-center main">
        <div>
            <div className="text-center box">
                <img className="bg" src={demo} alt="demo" />
            </div>
        </div>
        {/* <div>
            <button></button>
        </div> */}

    </div>
);

export default Demo;
