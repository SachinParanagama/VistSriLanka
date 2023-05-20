import React from 'react';
import './feedback.css'

const TourPlaceFeedback = () => {
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
              <label className="form-label">Comment:</label>
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourPlaceFeedback;