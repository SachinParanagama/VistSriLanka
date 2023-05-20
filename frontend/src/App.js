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
import BookEvent from './containers/EventManagement/BookEvent';

/*Tourguide management routes */
import AddTourGuide from './containers/TourGuideManagement/AddTourGuide';
import ViewTourGuide from './containers/TourGuideManagement/ViewTourGuide';
import BookTourGuide from './containers/TourGuideManagement/BookTourGuide';

/*Tourplace management routes */
import AddTourplace from './containers/TourplaceManagement/AddTourplace';
import ViewTourplace from './containers/TourplaceManagement/ViewTourplace';
import TourPlace from './containers/TourplaceManagement/TourPlace';
import TourPlaceFeedback from './containers/TourplaceManagement/TourPlaceFeedback';



/*Hotel management routes */
import AddHotel from './containers/HotelManagement/AddHotel';
import AddPackage from './containers/HotelManagement/AddPackages';
import ViewHotel from'./containers/HotelManagement/ViewHotel';
import TourGuide from './containers/TourGuideManagement/TourGuide';
import BookHotel from './containers/HotelManagement/BookHotel';


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
            <Route path="/book-event" element={<BookEvent/>} />

            {/*Tourguide management */}
            <Route path="/add-tourGuide" element={<AddTourGuide/>} />
            <Route path="/view-tourGuide" element={<ViewTourGuide/>} />
            <Route path="/tourGuide" element={<TourGuide/>} />
            <Route path="/book-tourGuide" element={<BookTourGuide/>} />


            {/*Tourplace management */}
            <Route path="/add-tourPlace" element={<AddTourplace/>} />
            <Route path="/view-tourPlace" element={<ViewTourplace/>} />
            <Route path="/tourPlace" element={<TourPlace/>} />
            <Route path="/feedback-tourPlace" element={<TourPlaceFeedback/>} />

            {/*Hotel Management */}
            <Route path="/add-hotel" element={<AddHotel/>} />
            <Route path="/add-package" element={<AddPackage/>} />
            <Route path="/view-hotel" element={<ViewHotel/>} />
            <Route path="/book-hotel" element={<BookHotel/>} />


         </Routes>
      
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
