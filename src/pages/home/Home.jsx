import React from 'react'
import './style.scss'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import WebHome from '../../components/webHome/WebHome';
import AppHome from '../../components/appHome/AppHome';

const Home = () => {
  const navigate = useNavigate();
  // const isMobile = /Mobi|Android/i.test(window.navigator.userAgent);
  return (
    <div>
      {/* {isMobile ? <AppHome /> : <WebHome />} */}
      <div className='lg:block md:block sm:hidden hidden'>
        <WebHome />
      </div>
      <div className='lg:hidden md:hidden sm:block block'>
        <AppHome />
      </div>
    </div>
    // <div>
    //   <nav>

    //   </nav>
    //   <p onClick={() => navigate(`/categorie/chana`)}>Chana</p>
    //   <p onClick={() => navigate(`/categorie/matar`)}>Matar</p>
    // </div>
  )
}

export default Home
