import React from "react";
// import App from "./App";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Demo from "./Demo";
import B1 from "./rec/B1";
import B2 from "./rec/B2";
import B3 from "./rec/B3";



const Routing=()=>{
    return(
        <>
        
        <BrowserRouter>
        <Routes>
             <Route path="/web/index/auth/birthCertificate/view" element={<Demo/>}/>
                {/*shivam*/}
             <Route path="/web/index/auth/birthCertificate/view/B/bWi4lfhNgilpM8tZ1" element={<B1/>}/> 
                 
                 {/*sumit*/}
             <Route path="/web/index/auth/birthCertificate/view/B/aWio2rHfhNgilpM8tP1" element={<B2/>}/>

    {/*adiya*/}
             <Route path="/web/index/auth/birthCertificate/view/B/bWio2rHfhNgilpM8tPqw" element={<B3/>}/>
                 
                 
             

            </Routes>
           
        </BrowserRouter>
    </>
    )
}
export default Routing;
