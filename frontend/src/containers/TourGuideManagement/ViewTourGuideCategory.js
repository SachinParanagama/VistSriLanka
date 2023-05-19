import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
// import { addToCart } from '../redux/actions/cartActions';


const ViewTourGuideCategory = ({tourguide,userInfo}) => {
    const cat = tourguide.category;

    const dispatch = useDispatch();

    // const handleAddToCart = () => {
    //     dispatch(addToCart(tourguide,userInfo));
    //     window.location.reload();
    // };
 

    return(
        <>
            {cat === "Tour Guide" &&
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-4 rounded card" >

                        <Card.Img className='image center' src={"http://localhost:5000/uploads/" + tourguide.image}></Card.Img>

                        <Card.Body>
                            <Card.Title>{tourguide.firstName}</Card.Title>
                            <Card.Title>{tourguide.lastName}</Card.Title>
                            <Card.Title>{tourguide.languages}</Card.Title>
                            <Card.Title>Price: Rs.{tourguide.charges}.00</Card.Title>
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

export default ViewTourGuideCategory;