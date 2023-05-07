import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/common/user/Home';
import AdminHome from './components/common/admin/AdminHome';

/*Event management routes */
import AddEvent from './containers/EventManagement/AddEvent';
import ViewEvent from './containers/EventManagement/ViewEvent';
import AddTourGuide from './containers/TourGuideManagement/AddTourGuide';
import ViewTourGuide from './containers/TourGuideManagement/ViewTourGuide';

/*Tourplace management routes */
import AddTourplace from './containers/TourplaceManagement/AddTourplace';
import ViewTourplace from './containers/TourplaceManagement/ViewTourplace';



/*Hotel management routes */
import AddHotel from './containers/HotelManagement/AddHotel';
import AddPackage from './containers/HotelManagement/AddPackages';
import EventCategory from './containers/EventManagement/EventCategory';


 const App = () =>{


 return (
   <Router>
     <div>
     
       <main>
         <Routes>
           
           <Route path="/customer-home" element={<Home/>} />
           <Route path="/admin-home" element={<AdminHome/>} />

            {/*Event management */}
            <Route path="/add-event" element={<AddEvent/>} />
            <Route path="/view-event" element={<ViewEvent/>} />
            <Route path="/add-tourGuide" element={<AddTourGuide/>} />
            <Route path="/view-tourGuide" element={<ViewTourGuide/>} />
            <Route path="/event" element={<EventCategory/>} />

            {/*Tourplace management */}
            <Route path="/add-tourPlace" element={<AddTourplace/>} />
            <Route path="/view-tourPlace" element={<ViewTourplace/>} />

            {/*Hotel Management */}
            <Route path="/add-hotel" element={<AddHotel/>} />
            <Route path="/add-package" element={<AddPackage/>} />

         </Routes>
      
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
