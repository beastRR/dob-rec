import React from "react";
// import App from "./App";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Demo from "./Demo";

const Routing=()=>{
    return(
        
        <BrowserRouter>
        <Routes>
            <Route  path ="/home"  element= {<Demo/>} />
            <Route path="/about" element={<Demo/>}/>
            <Route path="/projects" element={<Demo/>}/>
            </Routes>
            <Routes>
                <Route path="/blog" element={<Demo/>}/>
                <Route path="/blog/blog1" element={<Demo/>}/>
                <Route path="/blog2" element={<Demo/>}/> 
            
            
        </Routes>
        </BrowserRouter>
    )
}
export default Routing;
