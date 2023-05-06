import React, { useState } from "react"
import AddTourGuideNavBar from "./AddTourGuideNavBar";
import '../../App.css'
import './AddTourGuideNavBar'
import './AddEdit.css'
import '../../components/common/admin/HomeNavBar.css'
import AdminNavBar from "../../components/common/admin/AdminNavBar";



export default function AddTourGuide() {

    const clearData = () => {
        window.location.reload(false);
    };



    return (
    

        <div className="body">
            <AdminNavBar/>
            <AddTourGuideNavBar />
            
            <br></br>
            <br></br>

            <div className="containerss">
                <form action="http://localhost:5000/tourguide/add-tourGuide" method="post" class="form img " encType="multipart/form-data">

                    <h5>Add TourGuide</h5>
                    <br />

                    <br />

                    <div className="col-md-2 element">
                        <label for="insertfirstName" className="form-label1">First Name</label>
                        <input type="text" name="firstName" className="form-control input-field" id="insertfirstName" placeholder="Enter First name" required
                        />
                    </div>

                    <div className="col-md-2 element">
                        <label for="insertlastName" className="form-label1">Last Name</label>
                        <input type="text" name="lastName" className="form-control input-field" id="insertlastName" placeholder="Enter Last name" required
                        />
                    </div>

                    <div className="col-md-7 element">
                        <label for="insertcontactNumber" className="form-label1">Contact Number</label>
                        <input type="number" name="ContactNumber" className="form-control input-field" id="insertcontactNumber" placeholder="Enter contact number" required
                        />
                    </div>

                    <div className="col-md-7 element">
                        <label for="insertAge" className="form-label1">Age</label>
                        <input type="number" name="age" className="form-control input-field" id="insertAge" placeholder="Enter age" required
                        />
                    </div>

                    <div className="col-md-7 element">
                        <label for="insertlanguage" className="form-label1">Languages</label>
                        <input type="text" name="languages" className="form-control input-field" id="insertlanguages" placeholder="Enter preffered languages" required
                        />
                    </div>

                    <div className="col-md-7 element">
                        <label for="insertlocation" className="form-label1">Location</label>
                        <input type="text" name="locations" className="form-control input-field" id="insertlocation" placeholder="Enter location" required
                        />
                    </div>

                    <div className="col-md-5 element">
                        <label for="inputCharges" className="form-label1">Price(LKR.)</label>
                        <input name="charges" type="number" className="form-control" id="inputCharges" placeholder="Enter charge rate"
                        />
                    </div>

                    <div className="col-md-7 element">
                        <label for="insertdescripton" className="form-label1">Description</label>
                        <textarea type="text" name="descripton" className="form-control input-field" id="insertdescripton" placeholder="Enter description" required
                        />
                    </div>

                    <div className="element">
                        <label for="actual-btn" className="form-label1">Upload TourGuide Image</label>
                        <input type="file" id="actual-btn" name="image" className="upload textcolor" required
                        />
                    </div>

                    <br />

                    <button type="submit" className="btn Addbtn">Add TourGuide</button>
                    <buttons type="clear" className="btn Addbtn1" onClick={clearData}>Clear</buttons>

                    <br />

                </form>
            </div>
        </div>



    )
}