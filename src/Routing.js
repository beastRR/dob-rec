import React from "react";
// import App from "./App";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Demo from "./Demo";
import B1 from "./rec/b1";


const Routing=()=>{
    return(
        <>
        
        <BrowserRouter>
        <Routes>
             <Route path="/web/index/auth/birthCertificate/view" element={<Demo/>}/>
//                 shivam
             <Route path="/web/index/auth/birthCertificate/view/B/bWi4lfhNgilpM8tZ" element={<b1/>}/>
             <Route path="/web/index/auth/birthCertificate/view/B/bWi4lfhNgilpM8tZ1" element={<B1/>}/> 
                 
                 
             

            </Routes>
           
        </BrowserRouter>
    </>
    )
}
export default Routing;
