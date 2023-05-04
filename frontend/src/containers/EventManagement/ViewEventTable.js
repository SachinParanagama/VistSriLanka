import React from 'react';
import '../../components/common/DownloadInvoice.css'
import {Link} from "react-router-dom";

const ViewEventTable = ({event , handleEditClick, handleDeleteClick}) => {
    return(
        <>
            <tr>
                <td className='td'>{event.eventID}</td>
                <td className='td'>{event.eventName}</td>
                <td className='td'>{event.location}</td>
                <td className='td'>{event.date.substring(0,10)}</td>
                <td className='td'>LKR.{event.price}.00</td>
                <td className='td'>{event.unit}</td>

                <td>
                    <button type="button" onClick={(e) => handleEditClick(e,event)}className="btn btn-outline-success">Edit</button>
                    <button type="button" onClick={() => handleDeleteClick(event._id)}className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewEventTable;