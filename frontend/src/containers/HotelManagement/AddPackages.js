import React, { useState } from "react"
import AddHotelNavBar from './AddHotelNavBar';
import '../../App.css'
import './AddHotelNavBar.css'
import './AddHotel.css'
import '../../components/common/admin/HomeNavBar.css'
import AdminNavBar from "../../components/common/admin/AdminNavBar";

export default function AddPackage() {
    const clearData = () => {
        window.location.reload(false);
    };

return ( 
    <div className="body">
        <AdminNavBar/>
        <AddHotelNavBar />            

        <div className="containerss">
            <form action="http://localhost:5000/package/newPackage" method="post" class="form img responsive" encType="multipart/form-data">

                <h5>Add Packages</h5>
                <br />

                <div className="col-md-7 element">
                    <label for="hotel" className="form-label1">Hotel</label>
                    <input type="text" name="hotel" className="form-control input-field" id="hotel" required/>
                </div>

                <div className="col-md-7 element">
                    <label for="packageName" className="form-label1">Package Name</label>
                    <input type="text" name="packageName" className="form-control input-field" id="packageName" required/>
                </div>

                <div className="col-md-7 element">
                    <label for="Price" className="form-label1">Price</label>
                    <input type="text" name="Price" className="form-control input-field" id="Price" required/>
                </div>

                <div className="col-md-7 element">
                    <label for="description" className="form-label1">Description</label>
                    <input type="text" name="description" className="form-control input-field" id="description"required/>
                </div>

                <div className="element">
                    <label for="actual-btn" className="form-label1">Upload package Image</label>
                    <input type="file" id="actual-btn" name="image" className="upload textcolor" required/>
                </div>

                <button type="submit" className="btn Addbtn">Save</button>
                {/* <button type="submit" className="btn Addbtn">Save</button> */}
                <buttons type="clear" className="btn Addbtn1" onClick={clearData}>Clear</buttons>
                
            </form>
        </div>
    </div>
    )
}