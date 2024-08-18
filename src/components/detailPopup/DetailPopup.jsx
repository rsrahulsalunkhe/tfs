import React from 'react'
import './style.scss'
import banner from './../../assets/banner.jpeg'
import whatsapp from './../../assets/whatsapp.svg'
import Header from '../header/Header'
import { WhatsappShareButton } from 'react-share'

const DetailPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <div className='content'>
                    <Header />
                    <div className='detail'>
                        <span className='date'>13 March 2021</span>
                        <h1 className='my-2' style={{lineHeight: 1.15}}>Maize trade offer Aboti canvassing Jalgaon Jaswant Purab Bafna</h1>
                        <p className='my-2' style={{lineHeight: 1.15, fontSize: '22px', fontWeight: 'bold', color: '#5A5555'}}>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Wheat, Moong, Chana Urad, Jowar</p>
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

                    <WhatsappShareButton url='hiiii' className='w-full justify-center'>
                        <div className='share'>
                            <div>
                                <img src={whatsapp} alt="" />
                            </div>
                            <span style={{fontWeight: 'bold', fontSize: '19px', color: '#686666'}}>Share on Whatsapp</span>
                        </div>
                    </WhatsappShareButton>
                </div>
            </div>
        </div>
    )
}

export default DetailPopup
