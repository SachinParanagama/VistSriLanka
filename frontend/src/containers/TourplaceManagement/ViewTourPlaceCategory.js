import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { useState, useEffect } from "react";
import axios from "axios";
// import { addToCart } from '../redux/actions/cartActions';


const ViewTourPlaceCategory = () => {
    // const cat = tourPlace.category;

    const [allPlaces, setallPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tourPlace/view-tourPlace")
      .then((res) => setallPlaces(res.data))
      .catch((error) => console.log(error));
  });
 

    return(
        <>
            {allPlaces.filter((elem)=> elem.category == "tourPlace").map((elem)=> (
                <Col md={6} lg={4} sm={12}>
                
                    <div>
             
                    <Card className="shadow-lg m-4 rounded card" >
                 

                        <Card.Img className='image center' src={`/uploads/${elem.image}`}></Card.Img>

                        <Card.Body>
                            <Card.Title><center>{elem.placeName}</center></Card.Title>
                            <Card.Title><center>{elem.location}</center></Card.Title>
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
                    </div>
                 
                </Col>
                   ))}
         
        
        </>                        
    )
}

export default ViewTourPlaceCategory;