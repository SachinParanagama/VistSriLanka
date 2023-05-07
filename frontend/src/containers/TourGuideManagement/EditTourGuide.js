import React from 'react';

const EditTourGuide = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter first name' name="firstName" value={editFormData.firstName} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter last name' name="lastName" value={editFormData.lastName} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="number" required="required" placeholder='Enter contact Number' name="ContactNumber" value={editFormData.ContactNumber} onChange={handleEditFormChange}/> 
            </td>
            <td>
                <input type="number" required="required" placeholder='Enter age' name="age" value={editFormData.age} onChange={handleEditFormChange}/> 
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter preffered languages' name="languages" value={editFormData.languages} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter location' name="locations" value={editFormData.locations} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="number" required="required" placeholder='Enter charge rate' name="charges" value={editFormData.charges} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter description' name="descripton" value={editFormData.descripton} onChange={handleEditFormChange}/>
            </td>
            <td>
                <button type="submit" className="btn btn-outline-success">Save</button>
                <button type="button" onClick={handleCancelClick} className="btn btn-outline-danger">Cancel</button>
            </td>
        </tr>
    )
}

export default EditTourGuide;