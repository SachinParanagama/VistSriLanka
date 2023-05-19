import React, { useState } from "react"
import AddTourplaceNavBar from './AddTourplaceNavBar';
import '../../App.css'
import './AddTourplaceNavBar.css'
import './AddEdit.css'
import '../../components/common/admin/HomeNavBar.css'
import AdminNavBar from "../../components/common/admin/AdminNavBar";



export default function AddTourplace() {

    const clearData = () => {
        window.location.reload(false);
    };



    return (
    

        <div className="body">
            <AdminNavBar/>
            <AddTourplaceNavBar />
            
            <br></br>
            <br></br>

            <div className="containerss">
                <form action="http://localhost:5000/tourPlace/add-tourPlace" method="post" class="form img " encType="multipart/form-data">

                    <h5>Add Tourplace</h5>
                    <br />

                    <br />
                    <div className="col-md-10">
                        <label className="form-label1" for="categorySelect">Category</label>
                        <select name="category" className="form-select" id="categorySelect"
                        >
                            <option>Tour Place</option>
                        </select>
                    </div>

                    <br/>

                    <div className="col-md-7 element">
                        <label for="placeName" className="form-label1">TourPlace Name</label>
                        <input type="text" name="placeName" className="form-control input-field" id="placeName" placeholder="Enter event name" required
                        />
                    </div>

                    <br />

                    <div className="col-md-7 element">
                        <label for="location" className="form-label1">Location</label>
                        <input type="text" name="location" className="form-control input-field" id="location" placeholder="Enter location" required
                        />
                    </div>

                    <br />

                    <div className="col-md-7 element">
                        <label for="description" className="form-label1">Description</label>
                        <textarea type="text" name="description" className="form-control input-field" id="description" placeholder="Enter location" required
                        />
                    </div>

                    <br />

                    <div className="element">
                        <label for="actual-btn" className="form-label1">Upload Place Image</label>
                        <input type="file" id="actual-btn" name="image" className="upload textcolor" required
                        />
                    </div>

                    <br />

                    <button type="submit" className="btn Addbtn">Add Event</button>
                    <buttons type="clear" className="btn Addbtn1" onClick={clearData}>Clear</buttons>

                    <br />

                </form>
            </div>
        </div>



    )
}