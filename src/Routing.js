import React from "react";
import App from "./App";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Demo from "./Demo";

const Routing=()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Demo/>}/>
            <Route path="/web/index/auth/birthCertificate/view" element={<Demo/>}/>
            <Route path="/yo" element={<Demo/>}/>
                
        </Routes>
     <Routes>
       <Route path="/home" element={<App/>}/>
     </Routes>
    </BrowserRouter>
);

export default Routing;
