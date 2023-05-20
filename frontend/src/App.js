import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import UserHome from './components/common/user/Home';
import AdminHome from './components/common/admin/AdminHome';
import ContactUs from './components/common/ContactUs';
import AddComplaint from './components/common/AddComplaint';

/*Event management routes */
import AddEvent from './containers/EventManagement/AddEvent';
import ViewEvent from './containers/EventManagement/ViewEvent';
import Event from './containers/EventManagement/Event';

/*Tourguide management routes */
import AddTourGuide from './containers/TourGuideManagement/AddTourGuide';
import ViewTourGuide from './containers/TourGuideManagement/ViewTourGuide';

/*Tourplace management routes */
import AddTourplace from './containers/TourplaceManagement/AddTourplace';
import ViewTourplace from './containers/TourplaceManagement/ViewTourplace';
import TourPlace from './containers/TourplaceManagement/TourPlace';



/*Hotel management routes */
import AddHotel from './containers/HotelManagement/AddHotel';
import AddPackage from './containers/HotelManagement/AddPackages';
import ViewHotel from'./containers/HotelManagement/ViewHotel';
import TourGuide from './containers/TourGuideManagement/TourGuide';


 const App = () =>{


 return (
   <Router>
     <div>
     
       <main>
         <Routes>
           

           <Route path="/" element={<UserHome/>} />
           <Route path="/admin-home" element={<AdminHome/>} />

           <Route path="/contact" element={<ContactUs/>} />
           <Route path="/add-feedback" element={<AddComplaint/>} />


            {/*Event management */}
            <Route path="/add-event" element={<AddEvent/>} />
            <Route path="/view-event" element={<ViewEvent/>} />
            <Route path="/events" element={<Event/>} />

            {/*Tourguide management */}
            <Route path="/add-tourGuide" element={<AddTourGuide/>} />
            <Route path="/view-tourGuide" element={<ViewTourGuide/>} />
            <Route path="/tourGuide" element={<TourGuide/>} />



            {/*Tourplace management */}
            <Route path="/add-tourPlace" element={<AddTourplace/>} />
            <Route path="/view-tourPlace" element={<ViewTourplace/>} />
            <Route path="/tourPlace" element={<TourPlace/>} />

            {/*Hotel Management */}
            <Route path="/add-hotel" element={<AddHotel/>} />
            <Route path="/add-package" element={<AddPackage/>} />
            <Route path="/view-hotel" element={<ViewHotel/>} />

         </Routes>
      
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
