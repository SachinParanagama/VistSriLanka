import React from 'react';

const EditProduct = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter event name...' name="eventName" value={editFormData.eventName} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" placeholder='Enter location...' name="location" value={editFormData.location} onChange={handleEditFormChange}/>
            </td>
            <td>

            </td>
            <td>
                <select required="required" name="priceCategory">
                            <option>Choose...</option>
                            <option>Standing pre-sale</option>
                            <option>Standing normal</option>
                            <option>VIP seated pre-sale</option>
                            <option>VIP seated normal</option>
                            
                </select>
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter unit price...' name="price" value={editFormData.price} onChange={handleEditFormChange}/>
            </td>
            <td>
                <select required="required" name="unit">
                            <option>Choose...</option>
                            <option>Conference</option>
                            <option>Workshop</option>
                            <option>In door concerts</option>
                            <option>Out door concerts</option>
                </select>
            </td>
            <td>
                <button type="submit" className="btn btn-outline-success">Save</button>
                <button type="button" onClick={handleCancelClick} className="btn btn-outline-danger">Cancel</button>
            </td>
        </tr>
    )
}

export default EditProduct;