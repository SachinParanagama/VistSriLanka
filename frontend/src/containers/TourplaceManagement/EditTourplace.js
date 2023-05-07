import React from 'react';

const EditTourplace = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter tour place name...' name="placeName" value={editFormData.placeName} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter location...' name="location" value={editFormData.location} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" required="required" placeholder='Update description...' name="description" value={editFormData.description} onChange={handleEditFormChange}/>
            </td>
            <td>
                
            </td>
            <td>
                <button type="submit" className="btn btn-outline-success">Save</button>
                <button type="button" onClick={handleCancelClick} className="btn btn-outline-danger">Cancel</button>
            </td>
        </tr>
    )
}

export default EditTourplace;