import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
// import { addToCart } from '../redux/actions/cartActions';


const ViewEventCategory = ({event,userInfo}) => {
    const cat = event.category;

    const dispatch = useDispatch();

    // const handleAddToCart = () => {
    //     dispatch(addToCart(event,userInfo));
    //     window.location.reload();
    // };
 

    return(
        <>
            {cat === "Event" &&
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-4 rounded card" >

                        <Card.Img className='image center' src={"http://localhost:5000//uploads/" + event.image}></Card.Img>

                        <Card.Body>
                            <Card.Title><center>{event.eventName}</center></Card.Title>
                            <Card.Title><center>{event.location}</center></Card.Title>
                            <Card.Title><center>{event.date.substring(0,10)}</center></Card.Title>
                            <Card.Title><center>{event.priceCategory}</center></Card.Title>
                            <Card.Title><center>Price: Rs.{event.price}.00</center></Card.Title>
                            {/* <Card.Title>{product.quantity} in stock</Card.Title> */}
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

export default ViewEventCategory;