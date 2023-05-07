import React from 'react';
import '../../components/common/DownloadInvoice.css'
import {Link} from "react-router-dom";

const ViewTourplaceTable = ({tourPlace , handleEditClick, handleDeleteClick}) => {
    return(
        <>
            <tr>
                <td className='td'>{tourPlace.tourID}</td>
                <td className='td'>{tourPlace.placeName}</td>
                <td className='td'>{tourPlace.location}</td>
                <td className='td'>{tourPlace.description}</td>
              

                <td>
                    <button type="button" onClick={(e) => handleEditClick(e,tourPlace)}className="btn btn-outline-success">Edit</button>
                    <button type="button" onClick={() => handleDeleteClick(tourPlace._id)}className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewTourplaceTable;