import React from 'react';

const EditHotel = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td></td>
            <td></td>
            <td>
                <input type="text" required="required" placeholder='Enter Location name...' name="location" value={editFormData.location} onChange={handleEditFormChange}/>       
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter Contact Number...' name="contact" value={editFormData.contact} onChange={handleEditFormChange}/>
            </td>
            <td></td>
            <td>
                <button type="submit" className="btn btn-outline-success">Save</button>
                <button type="button" onClick={handleCancelClick} className="btn btn-outline-danger">Cancel</button>
            </td>
        </tr>
    )
}

export default EditHotel;