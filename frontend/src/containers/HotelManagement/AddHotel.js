import React, { useState } from "react"
import AddHotelNavBar from './AddHotelNavBar';
import '../../App.css'
import './AddHotelNavBar.css'
import './AddHotel.css'
import '../../components/common/admin/HomeNavBar.css'
import AdminNavBar from "../../components/common/admin/AdminNavBar";

export default function AddHotel() {
    const clearData = () => {
        window.location.reload(false);
    };

    return ( 

        <div className="body">
            <AdminNavBar/>
            <AddHotelNavBar />
            
            <div className="containerss">
                <form action="http://localhost:5000/hotel/newHotel" method="post" class="form img responsive" encType="multipart/form-data">

                    <h5>Add Accomodation</h5>
                    <br />

                    <div className="col-md-10">
                        <label className="form-label1" for="categorySelect">Category</label>
                        <select name="category" className="form-select" id="categorySelect">
                            <option>Hotel</option>
                        </select>
                    </div>

                    <div className="col-md-7 element">
                        <label for="hotelName" className="form-label1">Hotel Name</label>
                        <input type="text" name="hotelName" className="form-control input-field" id="hotelName" required/>
                    </div>

                    <div className="col-md-7 element">
                        <label for="location" className="form-label1">Location</label>
                        <input type="text" name="location" className="form-control input-field" id="location" required/>
                    </div>

                    <div className="col-md-7 element">
                        <label for="contact" className="form-label1">Contact no.</label>
                        <input type="text" name="contact" className="form-control input-field" id="contact" required/>
                    </div>

                    <div className="col-md-7 element">
                        <label for="description" className="form-label1">Description</label>
                        <input type="text" name="description" className="form-control input-field" id="description"required/>
                    </div>

                    <div className="element">
                        <label for="actual-btn" className="form-label1">Upload Hotel Image</label>
                        <input type="file" id="actual-btn" name="image" className="upload textcolor" required/>
                    </div>

                    <button type="submit" className="btn Addbtn">Calculate and Save</button>
                    <buttons type="clear" className="btn Addbtn1" onClick={clearData}>Clear</buttons>
                    <br/>

                </form>
            </div>
        </div>
    )
}