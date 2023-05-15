import React, {useState,useEffect,Fragment} from 'react';
import axios from 'axios';
import ViewEventCategory from './ViewEventCategory';
import HomeNavBar from '../../components/common/user/HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default function EventCategory() {

    const [events,setEvents] = useState([]);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

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
                    <ViewEventCategory event={event} userInfo={userInfo}/>
                  )
              })}
           </Row>
            </Container> 
                
            
        </>
    )
}