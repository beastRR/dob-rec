import React from "react";
// import App from "./App";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Demo from "./Demo";

const Routing=()=>{
    return(
        <>
        
        <BrowserRouter>
        <Routes>
             <Route path="/web/index/auth/birthCertificate/view" element={<Demo/>}/>

            </Routes>
           
        </BrowserRouter>
    </>
    )
}
export default Routing;
