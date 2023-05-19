import React from "react"
import Cards from './Cards';
import Footer from './Footer';
import HomeNavBar from './HomeNavBar';



export default function Home(){

    return(
        <div className='back'>
            <HomeNavBar/>
            <Cards/>
            <Footer/>
           
       
        </div>
    )
}