import React from "react";
// import App from "./App";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Demo from "./Demo";

const Routing=()=>{
    return(
        
        <BrowserRouter>
        <Routes>
            <Route  path ="/home"  element= {<Demo/>} />
            <Route to="/about" element={<Demo/>}/>
            <Route path="/projects" element={<Demo/>}/>
            </Routes>
           
        </BrowserRouter>
    )
}
export default Routing;
