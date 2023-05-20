import React from 'react';
import './booking.css'

const BookEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and data insertion
    // ...
  };

  return (
    <div className="container">
      <h2 className="heading">Tour Guide</h2>
      <div className="content">
        <div className="left-side">
          <img
            className="image"
            src="images/booking.png"
            alt="Booking Image"
            
          />
        </div>
        <div className="right-side">
          <h2 className="form-heading">Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Customer Name:</label>
              <input
                className="form-input"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date:</label>
              <input
                className="form-input"
                type="date"
                name="date"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input
                className="form-input"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Description:</label>
              <input
                className="textarea"
                type="description"
                name="description"
                required
              />
            </div>
            <br></br>
            <div className="form-group">
              <button className="form-button" type="submit">
                Add Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookEvent;