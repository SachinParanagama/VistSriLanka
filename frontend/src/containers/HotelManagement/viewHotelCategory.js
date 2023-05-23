import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import HomeNavBar from '../../components/common/user/HomeNavBar';
import {Row,Container} from 'react-bootstrap';

// import { addToCart } from '../redux/actions/cartActions';


const ViewHotelCategory = ({hotel,userInfo}) => {
    const cat = hotel.category;

    const dispatch = useDispatch();
    return(
        <>
            {cat === "Hotel" &&
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-4 rounded card" >

                        <Card.Img className='image center' src={"http://localhost:5000//uploads/hotel" + hotel.image}></Card.Img>

                        <Card.Body>
                            <Card.Title><center>{hotel.hotelName}</center></Card.Title>
                            <Card.Title><center>{hotel.location}</center></Card.Title>
                            <Card.Title><center>{hotel.contact}</center></Card.Title>
                            <div className='btnCenter'>
                            <button 
                                type='button' 
                                className='btn btn-warning btn-sm'
                                // disabled={product.quantity <= 0}
                                // onClick={handleAddToCart}
                                
                                >
                                    Add a Booking
                            </button>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            }
                
        </>                        
    )
}

export default ViewHotelCategory;