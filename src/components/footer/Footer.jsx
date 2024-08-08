import React from 'react'
import './style.scss'
import Facebook from './../../assets/icons8-facebook.svg'
import Instagram from './../../assets/icons8-instagram.svg'
import Linkedin from './../../assets/icons8-linkedin.svg'
import Twitter from './../../assets/icons8-twitterx.svg'
import Youtube from './../../assets/icons8-youtube.svg'
import AppStore from './../../assets/app-store-apple.png'
import GooglePlay from './../../assets/google-play.png'
import home from './../../assets/home.svg'
import futures from './../../assets/futures.svg'
import account from './../../assets/account.svg'

const Footer = () => {
  return (
    <div className='mt-4 mb-20 px-6 border-t-2 flex flex-wrap justify-around'>
        <div className='flex gap-4 mt-4 mb-5'>
            <span>Terms Of Use</span> <div className="divider"></div>
            <span>Privacy-Policy</span> <div className="divider"></div>
            <span>About</span>
        </div>
        <div>
            <span style={{fontWeight: 700, fontSize: '18px'}} >Follo us on</span>
            <div className='flex gap-2'>
                <img className='w-15' src={Facebook} alt="" />
                <img className='w-15' src={Instagram} alt="" />
                <img className='w-15' src={Linkedin} alt="" />
                <img className='w-15' src={Twitter} alt="" />
                <img className='w-15' src={Youtube} alt="" />
            </div>
        </div>

        <div className='mt-4'>
            <span style={{fontWeight: 700, fontSize: '18px'}} >Download the app</span>
            <div className='flex gap-2'>
                <img className='w-32' src={AppStore} alt="" />
                <img className='w-32' src={GooglePlay} alt="" />
            </div>
        </div>
        <div className='bottom-menu md:flex xl:hidden w-full flex justify-around h-auto pt-2 py-1 px-3 bg-white fixed bottom-0 left-0 z-50'>
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
        </div>
    </div>
  )
}

export default Footer
