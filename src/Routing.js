import React from "react";
// import App from "./App";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Demo from "./Demo";
import b1 from "./rec/b1";


const Routing=()=>{
    return(
        <>
        
        <BrowserRouter>
        <Routes>
             <Route path="/web/index/auth/birthCertificate/view" element={<Demo/>}/>
             <Route path="/web/index/auth/birthCertificate/view/B/bWi4lfhNgilpM8tZ" element={<Demo/>}/>   //shivam
             

            </Routes>
           
        </BrowserRouter>
    </>
    )
}
export default Routing;
