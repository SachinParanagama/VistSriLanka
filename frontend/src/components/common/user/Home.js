import React from "react"
import Cards from './Cards';
import Footer from './Footer';
import HomeNavBar from './HomeNavBar';
import { useState, useEffect } from "react";




export default function Home(){

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

    return(
        <>
      {isLoading ? (
        // Preloader component while loading
        <div class="text-center p-5">
        <div class="spinner-grow text-info" role="status">
            <span class="sr-only"></span>
        </div>
        </div>
      ) : (
        // Content of the home page after loading
        <div className='back'>
          <HomeNavBar/>
          <Cards/>
          <Footer/>
        </div>
      )}
    </>
  );
}