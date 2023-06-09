import React, {useState,useEffect} from 'react';
import axios from 'axios';
import HomeNavBar from '../../components/common/user/HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import ViewEventCategory from './ViewEventCategory';

export default function Event() {

    const [events,setEvents] = useState([]);

   
    useEffect(() =>{

        function getEvents() {
            axios.get("http://localhost:5000/event/view-event").then((res) => {

                setEvents(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getEvents();

    }, [])

    return (
        <>
            <HomeNavBar/>

           <Container className='justify-content-center p-2'>
           <Row>
              {events.map((event)=> {
                  return(
                    <ViewEventCategory event={event} />
                  )
              })}
           </Row>
           </Container>
            
                
            
        </>
    )
}