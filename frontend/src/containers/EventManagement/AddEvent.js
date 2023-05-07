import React, { useState } from "react"
import AddEventNavBar from './AddEventNavBar';
import '../../App.css'
import './AddEventNavBar.css'
import './AddEdit.css'
import '../../components/common/admin/HomeNavBar.css'
import AdminNavBar from "../../components/common/admin/AdminNavBar";



export default function AddEvent() {

    const clearData = () => {
        window.location.reload(false);
    };



    return (
    

        <div className="body">
            <AdminNavBar/>
            <AddEventNavBar />
            
            <br></br>
            <br></br>

            <div className="containerss">
                <form action="http://localhost:5000/event/add-event" method="post" class="form img " encType="multipart/form-data">

                    <h5>Add Event</h5>
                    <br />

                    <br />

                    <div className="col-md-7 element">
                        <label for="inserEvent" className="form-label1">Event Name</label>
                        <input type="text" name="eventName" className="form-control input-field" id="inserEvent" placeholder="Enter event name" required
                        />
                    </div>

                    <br />

                    <div className="col-md-7 element">
                        <label for="inserlocation" className="form-label1">Location</label>
                        <input type="text" name="location" className="form-control input-field" id="inserlocation" placeholder="Enter location" required
                        />
                    </div>

                    <br />

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                        <label for="datePicker" className="form-label1">Received Date</label>
                        <input id="date" name="date" label="Choose Received Date" type="Date" InputLabelProps={{ shrink: true, }} required
                        />
                    </div>

                    <br />

                    
                    <div className="col-md-7 element">
                        <label className="form-label1" for="categorySelect">Price Category</label>
                        <select name="priceCategory" className="form-select" id="priceCategorySelect"
                        >
                            <option>Choose...</option>
                            <option>Standing pre-sale</option>
                            <option>Standing normal</option>
                            <option>VIP seated pre-sale</option>
                            <option>VIP seated normal</option>
                        </select>
                    </div>
                    
                    <br/>

                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">Price(LKR.)</label>
                        <input name="price" type="number" className="form-control" id="inputQuant" placeholder="Enter unit price"
                        />
                    </div>

                    <br />

                    <div className="col-md-7 element">
                        <label className="form-label1" for="categorySelect">Event Category</label>
                        <select name="unit" className="form-select" id="unitSelect"
                        >
                            <option>Choose...</option>
                            <option>Conference</option>
                            <option>Workshop</option>
                            <option>In door concerts</option>
                            <option>Out door concerts</option>
                        </select>
                    </div>

                    <br />

                    <div className="element">
                        <label for="actual-btn" className="form-label1">Upload Event Image</label>
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