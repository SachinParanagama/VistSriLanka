import React, {useState,useEffect,Fragment,useRef} from 'react';
import ViewTourplaceNavBar from './ViewTourplaceNavBar';
import axios from 'axios';
import EditTourplace from './EditTourplace';
import ViewTourplaceTable from './ViewTourplaceTable';
import '../../App.css';
import './AddTourplaceNavBar.css'
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";
import '../../components/common/admin/HomeNavBar.css'
import AdminNavBar from "../../components/common/admin/AdminNavBar";
import swal from "sweetalert2";




export default function ViewTourplace(){

 

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [tourplaces,settourplaces] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

        function gettourplaces() {
            axios.get("http://localhost:5000/tourPlace/view-tourPlace").then((res) => {

                settourplaces(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }

        gettourplaces();

    }, [])

    const [editFormData, setEditFormData] = useState({
        tourID: "",
        placeName: "",
        location: "",
        description: "",

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
        
        const updateTourplace ={
            ID: editTourplace,
            placeName: editFormData.placeName,
            location: editFormData.location,
            description: editFormData.description,
         
            
        }

        axios.put("http://localhost:5000/tourPlace/ID",updateTourplace).then(() =>{
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


    const [editTourplace,setEditTP] = useState(null);

    const handleEditClick = (e, tourPlace)=> {
        e.preventDefault();
        setEditTP(tourPlace._id)

        const formValues = {
            tourID: tourPlace.tourID,
            placeName: tourPlace.placeName,
            location: tourPlace.location,
            description: tourPlace.description,
        
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditTP(null);
    }


    const handleDeleteClick = (id) => {
        
        axios.delete('http://localhost:5000/tourPlace/'+id).then(() =>{
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
            window.location.replace("http://localhost:3000/view-tourPlace");
            }, 3000)

    }


    return(
        <div>
            <AdminNavBar/>
            <ViewTourplaceNavBar/>
            
            
            <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>

                <input type="search" className="form-control" placeholder="Search Events..." value={q} onChange={(e)=> setQ(e.target.value)}/>      

            </div>
            

            <div ref={componentRef}>
            <form onSubmit={updateData}>
                <table className='table '>
                    <thead>
                        <tr>
                            <th>Tourplace ID</th>
                            <th>Tourplace Name</th>
                            <th>Loacation</th>
                            <th>Description</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {tourplaces.filter((tourPlace)=> {
                            if(q === ""){
                                return tourPlace
                            }else if(tourPlace.placeName.toLowerCase().includes(q.toLowerCase())) {
                                return tourPlace
                            }
                        }).map((tourPlace)=> (
                            
                            <Fragment>

                                {editTourplace === tourPlace._id ? (
                                    <EditTourplace
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                 ) : (
                                    <ViewTourplaceTable 
                                        tourPlace={tourPlace}
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