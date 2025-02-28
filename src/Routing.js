import React from "react";
// import App from "./App";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Demo from "./Demo";
import B1 from "./rec/B1";
import B2 from "./rec/B2";
import B3 from "./rec/B3";
import B4 from "./rec/B4";
import B5 from "./rec/B5";
import B6 from "./rec/B6";






const Routing=()=>{
    return(
        <>
        
        <BrowserRouter>
        <Routes>
             <Route path="/web/index/auth/birthCertificate/view" element={<Demo/>}/>
                {/*shivam*/}
             <Route path="/web/index/auth/birthCertificate/view/B/bWi4lfhNgilpM8tZ1" element={<B1/>}/> 
                 
                 {/*sumit*/}
             // <Route path="/web/index/auth/birthCertificate/view/B/aWio2rHfhNgilpM8tP1" element={<B2/>}/>

    {/*adiya*/}
             <Route path="/web/index/auth/birthCertificate/view/B/bWio2rHfhNgilpM8tPqw" element={<B3/>}/>
                 
                    {/*sourav*/}
             // <Route path="/web/index/auth/birthCertificate/view/B/aWoo8rUfvNgilpL4tQW3" element={<B4/>}/>
                 
                 
                    {/*akash*/}
             // <Route path="/web/index/auth/birthCertificate/view/B/eQoo8rUfvNgioqU4tQZ6" element={<B5/>}/>
                 
                  {/*siddharth*/}
             // <Route path="/web/index/auth/birthCertificate/view/B/lQrp3rUfvNzioqP4tQM4" element={<B6/>}/>
                 
                 
             

            </Routes>
           
        </BrowserRouter>
    </>
    )
}
export default Routing;
