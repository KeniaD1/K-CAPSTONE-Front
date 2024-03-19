import {Routes, Route} from "react-router-dom"
import Home from "../../Pages/Home";
import Messages from "../../Pages/Messages";
import New from "../../Pages/New";
import Show from "../../Pages/Show";
import Edit from "../../Pages/Edit";


import React from 'react';


const RouteComponent = () => {
    return (
        <Routes>
             <Route path='/' element= {< Home />} />

             <Route path='/messages' element={<Messages />} />

             <Route path='/messages/new' element={<New/>}/>

             <Route path='/messages/:id' element={<Show/>}/>

             <Route path='/messages/:id/edit' element={<Edit />} />


        </Routes>
    );
};

export default RouteComponent;