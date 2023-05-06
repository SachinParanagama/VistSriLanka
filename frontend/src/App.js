import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AdminHome from './components/common/admin/AdminHome';

/*Event management routes */
import AddEvent from './containers/EventManagement/AddEvent';
import ViewEvent from './containers/EventManagement/ViewEvent';
import AddTourGuide from './containers/TourGuideManagement/AddTourGuide';
import ViewTourGuide from './containers/TourGuideManagement/ViewTourGuide';

/*Tourplace management routes */
import AddTourplace from './containers/TourplaceManagement/AddTourplace';




 const App = () =>{


 return (
   <Router>
     <div>
     
       <main>
         <Routes>
          
           <Route path="/admin-home" element={<AdminHome/>} />

            {/*Event management */}
            <Route path="/add-event" element={<AddEvent/>} />
            <Route path="/view-event" element={<ViewEvent/>} />
            <Route path="/add-tourGuide" element={<AddTourGuide/>} />
            <Route path="/view-tourGuide" element={<ViewTourGuide/>} />

            {/*Tourplace management */}
            <Route path="/add-tourPlace" element={<AddTourplace/>} />

         </Routes>
      
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
