import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HomeNavBar from '../../components/common/user/HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import ViewTourPlaceCategory from './ViewTourPlaceCategory';

export default function TourPlace() {

    const [tourPlaces,setTourPlaces] = useState([]);

   
    useEffect(() =>{

        function getTourPlace() {
            axios.get("http://localhost:5000/tourPlace/view-tourPlace").then((res) => {

                setTourPlaces(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getTourPlace();

    }, [])

    return (
        <>
            <HomeNavBar/>

           <Container className='justify-content-center p-2'>
           <Row>
              {tourPlaces.map((tourPlace)=> {
                  return(
                    <ViewTourPlaceCategory tourPlace={tourPlace} />
                  )
              })}
           </Row>
           </Container>
            
                
            
        </>
    )
}