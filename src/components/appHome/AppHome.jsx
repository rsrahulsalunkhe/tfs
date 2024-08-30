import React from 'react'
import chana from './../../assets/chana.png'
import bajra from './../../assets/bajra.jpg'
import matar from './../../assets/matar.jpg'
import moong from './../../assets/moong.png'
import img1 from './../../assets/img_1.png'
import Header from '../header/Header'
import { useNavigate } from "react-router-dom";
import home from './../../assets/home.svg'
import futures from './../../assets/futures.svg'
import account from './../../assets/account.svg'
import AppStore from './../../assets/app-store-apple.png'
import GooglePlay from './../../assets/google-play.png'
import './style.scss'

const AppHome = () => {
    const navigate = useNavigate();
  return (
    <div className='text-center'>
        <Header title='home' />
        <section className='w-100 mt-5 px-3'>
            <div className='w-100'>
              <img src="https://jupiter.money/assets/images/home/upt-jupiter-screens.webp?v=6fa9b831b3"
                alt="Jupiter mobile app" />
            </div>
            <div className='w-100'>
              <h1 className='flex text-left' style={{fontSize: '48px', fontWeight: 700, lineHeight: 'normal'}}>Take your Relationship to the next level</h1>
              <p className='text-left'>A relationship app for couples in love. Explore the limitless bound of your relationship with our private chat, shared gallery and much more.</p>
              <div className='my-3 text-left'>
                <span className='text-left'>Available on</span>
                <div className='flex gap-2'>
                  <img className='w-32' src={AppStore} alt="" />
                  <img className='w-32' src={GooglePlay} alt="" />
                </div>
              </div>
            </div>
          </section>
        <div>
            <img className='w-100' src={img1} alt="" />
        </div>
        <div className='mx-[15%]'>
            <div className='hr-lines'>
                <span><span style={{fontSize: '24px', padding: 0, backgroundColor: 'transparent'}}>C</span>EREALS</span>
            </div>
        </div>

        <div className='flex justify-evenly'>
            <div className='commodity'>
                <div className='img'>
                    <img src={bajra} alt="" />
                </div>
                <span>Bajra</span>
                <p className='special'>• Special Report</p>
            </div>
        </div>

        <div className='mx-[15%]'>
            <div className='hr-lines'>
                <span><span style={{fontSize: '24px', padding: 0, backgroundColor: 'transparent'}}>P</span>ULSES</span>
            </div>
        </div>

        <div className='flex justify-evenly'>
            <div className='commodity' onClick={() => navigate(`/categorie/chana`)} >
                <div className='img'>
                    <img src={chana} alt="" />
                </div>
                <span>Chana</span>
                <p className='special'>• Special Report</p>
            </div>
            <div className='commodity' >
                <div className='img'>
                    <img src={matar} alt="" />
                </div>
                <span>Matar</span>
            </div>
            <div className='commodity' >
                <div className='img'>
                    <img src={moong} alt="" />
                </div>
                <span>Moong</span>
            </div>
        </div>

        <div className='text-left px-2 py-10 mb-[58px] bg-orange-100 mt-6'>
            <span className='text-yellow-500 text-6xl font-bold'>Mandi Central</span>
            <p className='text-xl mt-4'>Agri Trade Assistance App</p>
        </div>

        {/* <div className='w-full flex justify-around h-auto pt-2 py-1 px-3 bg-white fixed bottom-0 left-0 z-50'>
            <div className='flex flex-col items-center'>
                <div className='w-[25px] h-[25px]'>
                    <img className='w-full h-full' src={home} alt="" />
                </div>
                <span style={{fontSize: '14px'}}>HOME</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-[25px] h-[25px]'>
                    <img className='w-full h-full' src={futures} alt="" />
                </div>
                <span style={{fontSize: '14px'}}>FUTURES</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-[25px] h-[25px]'>
                    <img className='w-full h-full' src={account} alt="" />
                </div>
                <span style={{fontSize: '14px'}}>ACCOUNT</span>
            </div>
        </div> */}
    </div>
  )
}

export default AppHome
