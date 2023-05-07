import React from "react";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import './AddTourGuideNavBar.css';

function AddTourGuideNavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav">

            <div className="container-fluid">
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/admin-home" class="btn homebtn"><FaHome/><span style={{position:"relative", top:"1.5px",marginLeft:"2px"}}>Home</span></Link>

                <div className="collapse navbar-collapse"></div>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav Navbtn">
                        
                        <Link to="/add-tourGuide" className="btn nav-link anime color active" style={{color:"white"}} aria-current="page">Add TourGuide</Link>
                        <Link to="/view-tourGuide" className="btn nav-link anime color" style={{color:"white"}}>Available TourGuides</Link>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default AddTourGuideNavBar;