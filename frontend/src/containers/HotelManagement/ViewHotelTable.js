import React from 'react';
import '../../components/common/DownloadInvoice.css'
import {Link} from "react-router-dom";

const ViewHotelTable = ({hotel , handleEditClick, handleDeleteClick}) => {
    return(
        <>
            <tr>
                <td className='td'>{hotel.hId}</td>
                <td className='td'>{hotel.hotelName}</td>
                <td className='td'>{hotel.location}</td>
                <td className='td'>{hotel.contact}</td>
                <td className='td'>{hotel.description}</td>

                <td>
                    <button type="button" onClick={(e) => handleEditClick(e,hotel)}className="btn btn-outline-success">Edit</button>
                    <button type="button" onClick={() => handleDeleteClick(hotel._id)}className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewHotelTable;