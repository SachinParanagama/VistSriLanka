import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AdminHome from './components/common/admin/AdminHome';

import AddEvent from './containers/EventManagement/AddEvent';
import ViewEvent from './containers/EventManagement/ViewEvent';


 const App = () =>{


 return (
   <Router>
     <div>
     
       <main>
         <Routes>
          
           <Route path="/admin-home" element={<AdminHome/>} />


            <Route path="/add-event" element={<AddEvent/>} />
            <Route path="/view-event" element={<ViewEvent/>} />

         </Routes>
      
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
