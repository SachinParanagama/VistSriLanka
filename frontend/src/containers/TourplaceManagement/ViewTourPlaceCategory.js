import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
// import { addToCart } from '../redux/actions/cartActions';


const ViewTourPlaceCategory = ({tourPlace,userInfo}) => {
    const cat = tourPlace.category;

    const dispatch = useDispatch();

    // const handleAddToCart = () => {
    //     dispatch(addToCart(event,userInfo));
    //     window.location.reload();
    // };
 

    return(
        <>
            {cat === "Tour Place" &&
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-4 rounded card" >

                        <Card.Img className='image center' src={"http://localhost:5000/uploads/" + tourPlace.image}></Card.Img>

                        <Card.Body>
                            <Card.Title><center>{tourPlace.placeName}</center></Card.Title>
                            <Card.Title><center>{tourPlace.location}</center></Card.Title>
                            {/* <Card.Title>{product.quantity} in stock</Card.Title> */}
                            <div className='btnCenter'>
                            <button 
                                type='button' 
                                className='btn btn-warning btn-sm'
                                // disabled={product.quantity <= 0}
                                // onClick={handleAddToCart}
                                
                                >
                                    View Place
                            </button>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            }
                
        </>                        
    )
}

export default ViewTourPlaceCategory;