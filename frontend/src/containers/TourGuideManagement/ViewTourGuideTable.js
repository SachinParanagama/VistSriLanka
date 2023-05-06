import React from 'react';
import '../../components/common/DownloadInvoice.css'
import {Link} from "react-router-dom";

const ViewTourGuideTable = ({tourguide , handleEditClick, handleDeleteClick}) => {
    return(
        <>
            <tr>
                <td className='td'>{tourguide.tourGuideID}</td>
                <td className='td'>{tourguide.firstName}</td>
                <td className='td'>{tourguide.lastName}</td>
                <td className='td'>{tourguide.ContactNumber}</td>
                <td className='td'>{tourguide.age}</td>
                <td className='td'>{tourguide.languages}</td>
                <td className='td'>{tourguide.locations}</td>
                <td className='td'>LKR.{tourguide.charges}.00</td>
                <td className='td'>{tourguide.descripton}</td>

                <td>
                    <button type="button" onClick={(e) => handleEditClick(e,tourguide)}className="btn btn-outline-success">Edit</button>
                    <button type="button" onClick={() => handleDeleteClick(tourguide._id)}className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewTourGuideTable;