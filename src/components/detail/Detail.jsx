import React from 'react'
import './style.scss'
import Header from '../header/Header'
import banner from './../../assets/banner.jpeg'
import whatsapp from './../../assets/whatsapp.svg'
import { WhatsappShareButton } from "react-share";

const Detail = () => {
  return (
    <div>
      <Header title='detail' />
        <div className='detail'> 
            <span className='date'>13 March 2021</span>
            <h1 className='my-2' style={{lineHeight: 1.15}}>Maize trade offer Aboti canvassing Jalgaon Jaswant Purab Bafna</h1>
            <p className='sub-title my-2' style={{lineHeight: 1.15}}>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Wheat, Moong, Chana Urad, Jowar</p>
        </div>
        <div>
          <img src={banner} alt="" />
          <img src={banner} alt="" />
        </div>
        <div className='p-4'>
          <span style={{fontWeight: 'regular', fontSize: '20px', color: '#121212'}}>Chana prices continued to trade weak across major centres tracking weak cues from futures prices. Bid trend in Nafed auction also indicated similar sentiments.</span>
        </div>

        <div>
          <img src={banner} alt="" />
        </div>

        <div className='p-4'>
          <span style={{fontWeight: 'regular', fontSize: '20px', color: '#121212'}}>Chana prices continued to trade weak across major centres tracking weak cues from futures prices. Bid trend in Nafed auction also indicated similar sentiments.</span>
        </div>

        <div className='px-4'>
          <span style={{fontWeight: 'bold', fontSize: '18px', color: '#000000'}}>Link : </span>
          <a style={{fontWeight: 'regular', fontSize: '18px', color: '#184CD3'}} href="www.medium.com">www.medium.com</a>
        </div>

        <WhatsappShareButton url='hii from rahul' className='w-full flex justify-center'>
        <div className='share'>
          <div>
            <img src={whatsapp} alt="" />
          </div>
          <span style={{fontWeight: 'bold', fontSize: '19px', color: '#686666'}}>Share on Whatsapp</span>
        </div>
        </WhatsappShareButton>
    </div>
  )
}

export default Detail
