import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HomeNavBar from '../../components/common/user/HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import ViewHotelCategory from './HotelCategory';

export default function Hotel() {

    const [hotels,setHotels] = useState([]);

   
    useEffect(() =>{

        function getHotels() {
            axios.get("http://localhost:5000/event/view-event").then((res) => {

                setHotels(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getHotels();

    }, [])

    return (
        <>
            <HomeNavBar/>

           <Container className='justify-content-center p-2'>
           <Row>
              {hotels.map((hotel)=> {
                  return(
                    <ViewHotelCategory hotel={hotel} />
                  )
              })}
           </Row>
           </Container>
            
                
            
        </>
    )
}