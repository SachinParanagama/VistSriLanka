import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HomeNavBar from '../../components/common/user/HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import ViewTourGuideCategory from './ViewTourGuideCategory';

export default function TourGuide() {

    const [tourguide,setEvents] = useState([]);

   
    useEffect(() =>{

        function getTourGuides() {
            axios.get("http://localhost:5000/tourguide/view-tourGuide").then((res) => {

                setEvents(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getTourGuides();

    }, [])

    return (
        <>
            <HomeNavBar/>

           <Container className='justify-content-center p-2'>
           <Row>
              {tourguide.map((tourguide)=> {
                  return(
                    <ViewTourGuideCategory tourguide={tourguide} />
                  )
              })}
           </Row>
           </Container>
            
                
            
        </>
    )
}