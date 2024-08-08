import React from 'react'
import './style.scss'
import opn from './../../assets/opn.svg'
import cub from './../../assets/cub.svg'
import fire from './../../assets/fire.svg'
import banner2 from './../../assets/banner2.jpeg'

const Price = (props) => {
  return (
    <div className='price-status'>
        <span style={{fontSize: '15px', fontWeight: 700, color: '#606060'}}>{props.status}</span>
        <span style={{fontSize: '19px', fontWeight: 500, color: '#191919', fontFamily: 'Work Sans'}}>{props.price}</span>
        <span style={{fontSize: '18px', fontWeight: 500, color: props.color, fontFamily: 'Work Sans'}}>{props.change}</span>
    </div>
  )
}


const SentimentCard = () => {
  return (
    <div className='w-full lg:w-[32%]'>
        <div className='p-3' style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px', borderRadius: '12px'}}>
            <div className='flex'>
                <span className='date'>27-09-2023</span>
                <span className='status'>STEADY TO FIRM</span>
            </div>
            <div className='flex mt-2'>
                <div className='location'>
                    <p>DELHI</p>
                    <span>RJ Line</span>
                </div>
                <div className='price'>
                    <span className='price-range'>₹5100-5200</span>
                    <span className='up-down'><span className='up-down1'>+50</span></span>
                </div>
            </div>

            <div className='divider1'>
                <div className='gradient-background1'></div>
                <div className='gradient-dot me-2'></div>
                <span>KEY STATISTICS</span>
                <div className='gradient-dot ms-2'></div>
                <div className='gradient-background2'></div>
            </div>
            
            <div className='flex justify-around mt-3 mb-3'>
                <Price status='OPEN' price='5000-5100' change='▲812' color='#00AA08'/>
                <Price status='Low' price='5000-5100' change='▲812' color='#EE0000'/>
                <Price status='HIGH' price='5000-5100' change='▲812' color='#00AA08'/>
            </div>

            <div className='flex mt-2'>
                <div className='w-[7%] h-[24px]'>
                    <img className='w-full h-full' src={opn} alt="" />
                </div>
                <p className='w-[94%] text-left ms-1' style={{color: 'var(--black)', fontWeight: 700, lineHeight: 1.15}}>Trading Activity Very Dull in Chana and rate down</p>
            </div>
            <div className='flex mt-2'>
                <div className='w-[7%] h-[24px]'>
                    <img className='w-full h-full' src={cub} alt="" />
                </div>
                <p className='w-[94%] text-left ms-1' style={{color: 'var(--black)', fontWeight: 700, lineHeight: 1.15}}>Trading Activity Very Dull in Chana and rate down</p>
            </div>
            <p className='text-left ms-6 mt-2' style={{color: '#1400FC', fontWeight: 700, fontSize: '14px'}}>M P AGRO OVERSEAS, DELHI</p>
        </div>

        <div className='banner-img my-3'>
            <img src={banner2} alt="" />
        </div>
    </div>
  )
}

export default SentimentCard
