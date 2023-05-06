import React, {useState,useEffect,Fragment,useRef} from 'react';
import ViewTourGuideNavBar from './ViewTourGuideNavBar';
import axios from 'axios';
import EditTourGuide from './EditTourGuide';
import ViewTourGuideTable from './ViewTourGuideTable';
import '../../App.css';
import './AddTourGuideNavBar.css'
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";
import '../../components/common/admin/HomeNavBar.css'
import AdminNavBar from "../../components/common/admin/AdminNavBar";
import swal from "sweetalert2";




export default function ViewTourGuide(){

 

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [tourguides,setTourGuides] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

        function getTourGuides() {
            axios.get("http://localhost:5000/tourguide/view-tourGuide").then((res) => {

                setTourGuides(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }

        getTourGuides();

    }, [])

    const [editFormData, setEditFormData] = useState({
        tourGuideID: "",
        firstName: "",
        lastName: "",
        ContactNumber: "",
        age: "",
        languages: "",
        locations: "",
        charges: "",
        descripton: "",
    })


    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    function updateData(e){
        e.preventDefault();
        
        const updateTourGuide ={
            ID: editTourGuide,
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            ContactNumber: editFormData.ContactNumber,
            age: editFormData.age,
            languages: editFormData.languages,
            locations: editFormData.locations,
            charges: editFormData.charges,
            descripton: editFormData.descripton
            
        }

        axios.put("http://localhost:5000/tourguide/update/:ID",updateTourGuide).then(() =>{
            swal.fire({
                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                showConfirmButton: false,
            });
        }).catch((err) =>{
            swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",
            });
        })

        setTimeout(()=>{
            window.location.reload();
        },1500)


    }


    const [editTourGuide,setEditTourGuide] = useState(null);

    const handleEditClick = (e, tourguide)=> {
        e.preventDefault();
        setEditTourGuide(tourguide._id)

        const formValues = {
            tourGuideID: tourguide.tourGuideID,
            firstName: tourguide.firstName,
            lastName: tourguide.lastName,
            ContactNumber: tourguide.ContactNumber,
            age: tourguide.age,
            languages: tourguide.languages,
            locations: tourguide.locations,
            charges: tourguide.charges,
            descripton: tourguide.descripton,
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditTourGuide(null);
    }


    const handleDeleteClick = (id) => {
        
        axios.delete('http://localhost:5000/tourguide/delete/'+id).then(() =>{
            swal.fire({
                title: "Success!",
                text: "Deleted Successfully",
                icon: "success",
                showConfirmButton: false,
            })
        }).catch((err) =>{
            //alert(err)
            swal.fire({
                title: "Error!",
                text: "Couldn't delete your Details",
                icon: "error",
            });
        });
        setTimeout(() => {
            window.location.replace("http://localhost:3000/view-tourGuide");
            }, 3000)

    }


    return(
        <div>
            <AdminNavBar/>
            <ViewTourGuideNavBar/>
            
            
            <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>

                <input type="search" className="form-control" placeholder="Search TourGuides..." value={q} onChange={(e)=> setQ(e.target.value)}/>      

            </div>
            

            <div ref={componentRef}>
            <form onSubmit={updateData}>
                <table className='table '>
                    <thead>
                        <tr>
                            <th>TourGuide ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Contact Number</th>
                            <th>Age</th>
                            <th>Languages</th>
                            <th>Location</th>
                            <th>Price(LKR.)</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tourguides.filter((tourguide)=> {
                            if(q === ""){
                                return tourguide
                            }else if(tourguide.firstName.toLowerCase().includes(q.toLowerCase())) {
                                return tourguide
                            }
                        }).map((tourguide)=> (
                            <Fragment>

                                {editTourGuide === tourguide._id ? (
                                    <EditTourGuide
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                 ) : (
                                    <ViewTourGuideTable 
                                        tourguide={tourguide}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                 )}
                                 
                            </Fragment>
                            
                        ))}
                    </tbody>

                </table>
            </form>
            </div>
        </div>
    );
}