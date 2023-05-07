import React from 'react'
import CardItem from '../CardItem'
import './AdminCards.css'

function AdminCards() {
  return (
    <div className='cards'>
      <h1>Welcome to Visit SriLanka </h1>
      <h1>Management Section</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/Event.gif"
                    text="Manage Event Details"
                    label="Event Management"
                    path="/view-event"
                />
                <CardItem
                    src="images/Guide.gif"
                    text="Manage Guide Details"
                    label="Tour Guide Management"
                    path="/view-tourGuide"
                />

                
            </ul>

            <ul className='cards__items'>

                <CardItem
                    src="images/place.gif"
                    text="Manage Tour Place"
                    label="Tour Place Management"
                    path="/userManagement"
                />

               

                <CardItem
                    src="images/hotel.gif"
                    text="Manage Hotel Details"
                    label="Hotel Management"
                    path="/view_Payment"
                />

              
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default AdminCards