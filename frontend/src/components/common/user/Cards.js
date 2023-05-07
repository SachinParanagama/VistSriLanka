import React from 'react'
import CardItem from '../CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>-------Featured Products-------</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/home-event.gif"
                    text="Feed Your Soul With Pizza "
                    label="Events"
                    path="/event"
                />
                <CardItem
                    src="images/home-guide.gif"
                    text="You like burgers? Then you’ll love ours"
                    label="Tour Guides"
                    path="/burgers"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src="images/home-place.gif"
                    text="There’s something in our shawarma that makes everyone want more"
                    label="Tour Places"
                    path="/shawarma"
                />
                <CardItem
                    src="images/home-hotel.gif"
                    text="Hot and fresh, just the way you like it"
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
