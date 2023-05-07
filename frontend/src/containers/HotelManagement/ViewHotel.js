import React, {useState,useEffect,Fragment,useRef} from 'react';
import ViewHotelNavBar from './ViewHotelNavBar';
import axios from 'axios';
import EditHotel from './EditHotel';
import ViewHotelTable from './ViewHotelTable';
import '../../App.css';
import './AddHotelNavBar.css'
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";
import '../../components/common/admin/HomeNavBar.css'
import AdminNavBar from "../../components/common/admin/AdminNavBar";
import swal from "sweetalert2";

export default function ViewHotel(){

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [hotels,setHotels] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

        function getHotels() {
            axios.get("http://localhost:5000/hotel/").then((res) => {

                setHotels(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }
        getHotels();
    }, [])

    const [editFormData, setEditFormData] = useState({
        hId: "",
        hotelName: "",
        location: "",
        contact: "",
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
        
        const updateHotel ={
            hId: editHotel,
            hotelName: editFormData.hotelName,
            location: editFormData.location,
            contact: editFormData.contact,
            description: editFormData.description            
        }

        axios.put("http://localhost:5000/hotel/update/:ID",updateHotel).then(() =>{
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


    const [editHotel,setEditHotel] = useState(null);

    const handleEditClick = (h, hotel)=> {
        h.preventDefault();
        setEditHotel(hotel._id)

        const formValues = {
            hId: hotel.hId,
            hotelName: hotel.hotelName,
            location: hotel.location,
            contact: hotel.contact,
            description: hotel.description,
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditHotel(null);
    }
    
    const handleDeleteClick = (id) => {
        
        axios.delete('http://localhost:5000/hotel/delete/'+id).then(() =>{
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
            window.location.replace("http://localhost:3000/view-hotel");
            }, 3000)
    }

    return(
        <div>
            <AdminNavBar/>
            <ViewHotelNavBar/>            
            
            <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>
                <input type="search" className="form-control" placeholder="Search Events..." value={q} onChange={(e)=> setQ(e.target.value)}/>      

            </div>
            

            <div ref={componentRef}>
            <form onSubmit={updateData}>
                <table className='table responsive'>
                    <thead>
                        <tr>
                            <th>Hotel ID</th>
                            <th>Hotel Name</th>
                            <th>Loacation</th>
                            <th>Contact No.</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {hotels.filter((hotel)=> {
                            if(q === ""){
                                return hotel
                            }else if(hotel.eventName.toLowerCase().includes(q.toLowerCase())) {
                                return hotel
                            }
                        }).map((hotel)=> (
                            <Fragment>

                                {editHotel === hotel._id ? (
                                    <EditHotel
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                 ) : (
                                    <ViewHotelTable 
                                        hotel={hotel}
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