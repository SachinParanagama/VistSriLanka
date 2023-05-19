import React from 'react'
import CardItem from '../CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>-------Featured Services From Us-------</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/home-event.gif"
                    text="Feed Your Soul With Fun and Enjoyment "
                    label="Event"
                    path="/events"
                />
                <CardItem
                    src="images/home-guide.gif"
                    text="Discover the hidden gems with a local guide"
                    label="Tour Guides"
                    path="/tourguide"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src="images/home-place.gif"
                    text="Explore the magic of Sri Lanka"
                    label="Tour Places"
                    path="/shawarma"
                />
                <CardItem
                    src="images/home-hotel.gif"
                    text="A world of comfort at your doorstep"
                    label="Hotels"
                    path="/hotdogs"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
