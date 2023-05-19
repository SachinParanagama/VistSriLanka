import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
// import { addToCart } from '../redux/actions/cartActions';


const ViewHotelCategory = ({event,userInfo}) => {
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

                        <Card.Img className='image center' src={"http://localhost:5000/uploads/" + event.image}></Card.Img>

                        <Card.Body>
                            <Card.Title>{event.eventName}</Card.Title>
                            <Card.Title>Price: Rs.{event.price}.00</Card.Title>
                            {/* <Card.Title>{product.quantity} in stock</Card.Title> */}
                            <div className='btnCenter'>
                            <button 
                                type='button' 
                                className='btn btn-warning btn-sm'
                                // disabled={product.quantity <= 0}
                                // onClick={handleAddToCart}
                                
                                >
                                    Add to Cart
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