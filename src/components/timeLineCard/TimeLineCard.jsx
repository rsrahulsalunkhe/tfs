import React from 'react'
import './style.scss'
import cub from './../../assets/cub.svg'
import fire from './../../assets/fire.svg'
import opn from './../../assets/opn.svg'
import banner from './../../assets/banner.jpeg'
import banner3 from './../../assets/banner3.jpeg'

const TimeLineCard = (props) => {
  return (
    <div className='lg:w-[32%] w-full'>
        <div className='news-card'>
            <div className='card-detail'> 
                <p className='news-card-date'>13 March 2021</p>
                <h1 className='my-2' style={{lineHeight: 1.15}}>Maize trade offer Aboti canvassing Jalgaon</h1>
                <p className='sub-title my-2' style={{lineHeight: 1.15}}>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Kabuli</p>
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
                <p className='load-more'><i>Load More Reports {'>'}</i></p>
            </div>
        </div>

        <div className='banner-img my-3'>
            <img src={props.img} alt="" />
        </div>
    </div>
  )
}

export default TimeLineCard
