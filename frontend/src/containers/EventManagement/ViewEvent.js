import React, {useState,useEffect,Fragment,useRef} from 'react';
import ViewEventNavBar from './ViewEventNavBar';
import axios from 'axios';
import EditEvent from './EditEvent';
import ViewEventTable from './ViewEventTable';
import '../../App.css';
import './AddEventNavBar.css'
import { useReactToPrint } from "react-to-print";
import '../../components/common/admin/HomeNavBar.css';
import AdminNavBar from "../../components/common/admin/AdminNavBar";
import swal from "sweetalert2";




export default function ViewEvent(){

 

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [events,setEvents] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

        function getEvents() {
            axios.get("http://localhost:5000/event/view-event").then((res) => {

                setEvents(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }

        getEvents();

    }, [])

    const [editFormData, setEditFormData] = useState({
        eventID: "",
        category: "",
        eventName: "",
        location: "",
        date: "",
        priceCategory: "",
        price: "",
        unit: "",
        description:"",
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
        
        const updateEvent ={
            ID: editEvent,
            category: editFormData.category,
            eventName: editFormData.eventName,
            location: editFormData.location,
            priceCategory: editFormData.priceCategory,
            price: editFormData.price,
            unit: editFormData.unit,
            description: editFormData.description,
            
        }

        axios.put("http://localhost:5000/event/update/:ID",updateEvent).then(() =>{
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


    const [editEvent,setEditEvent] = useState(null);

    const handleEditClick = (e, event)=> {
        e.preventDefault();
        setEditEvent(event._id)

        const formValues = {
            eventID: event.eventID,
            category: event.category,
            eventName: event.eventName,
            date: event.date,
            priceCategory: event.priceCategory,
            price: event.price,
            unit: event.unit,
            description: event.description,
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditEvent(null);
    }


    const handleDeleteClick = (id) => {
        
        axios.delete('http://localhost:5000/event/delete/'+id).then(() =>{
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
            window.location.replace("http://localhost:3000/view-event");
            }, 3000)

    }


    return(
        <div>
            <AdminNavBar/>
            <ViewEventNavBar/>
            
            
            <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>

                <input type="search" className="form-control" placeholder="Search Events..." value={q} onChange={(e)=> setQ(e.target.value)}/>      

            </div>
            

            <div ref={componentRef}>
            <form onSubmit={updateData}>
                <table className='table '>
                    <thead>
                        <tr>
                            <th>Event ID</th>
                            <th>Category</th>
                            <th>Event Name</th>
                            <th>Loacation</th>
                            <th>Date</th>
                            <th>Price Category</th>
                            <th>Price</th>
                            <th>Event Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {events.filter((event)=> {
                            if(q === ""){
                                return event
                            }else if(event.eventName.toLowerCase().includes(q.toLowerCase())) {
                                return event
                            }
                        }).map((event)=> (
                            <Fragment>

                                {editEvent === event._id ? (
                                    <EditEvent
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                 ) : (
                                    <ViewEventTable 
                                        event={event}
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