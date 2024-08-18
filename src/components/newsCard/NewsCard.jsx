import React, {useState} from 'react'
import './style.scss'
import cub from './../../assets/cub.svg'
import opn from './../../assets/opn.svg'
import banner from './../../assets/banner.jpeg'
import banner2 from './../../assets/banner2.jpeg'
import { useNavigate } from "react-router-dom"
import DetailPopup from '../detailPopup/DetailPopup'

const NewsCard = (props) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const navigate = useNavigate()
  return (
    <div className='lg:w-[32%]'>
        <div className='news-card'>
            <img src={banner} alt="" />
            <div className='card-detail-mobile' onClick={() => navigate(`/detail/${props.categorie}`)}>
                <span className='date mb-2'>27-09-2023</span>
                <h1 className='cart-title' style={{lineHeight: 1.15}}>Maize trade offer Aboti canvassing Jalgaon</h1>
                <p className='sub-title' style={{lineHeight: 1.15}}>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Kabuli</p>
                <div className='divider1 my-4'>
                    <div className='gradient-background1'></div>
                    <div className='gradient-dot me-2'></div>
                    <span>HIGHLIGHTS</span>
                    <div className='gradient-dot ms-2'></div>
                    <div className='gradient-background2'></div>
                </div>
                <div style={{lineHeight: 1.15}}>
                    <div className='flex mt-2'>
                        <div className='w-[7%] h-[24px]'>
                            <img className='w-full h-full' src={opn} alt="" />
                        </div>
                        <p className='w-[94%] text-left ms-1' style={{color: 'var(--black)', fontSize: '15px', fontWeight: 500, lineHeight: 1.15}}>Trading Activity Very Dull in Chana and rate down</p>
                    </div>
                    <div className='flex mt-2'>
                        <div className='w-[7%] h-[24px]'>
                            <img className='w-full h-full' src={cub} alt="" />
                        </div>
                        <p className='w-[94%] text-left ms-1' style={{color: 'var(--black)', fontSize: '15px', fontWeight: 500, lineHeight: 1.15}}>Trading Activity Very Dull in Chana and rate down</p>
                    </div>
                </div>
                    {/* <p className='load-more text-right me-2' onClick={() => navigate(`/detail/${props.categorie}`)}><i>Load More Reports {'>'}</i></p> */}
                <p className='load-more text-right me-2'><i>Load More Reports {'>'}</i></p>
            </div>

            <div className='card-detail' onClick={() => {setShow(true);setVideoId(video.key);}}>
                <span className='date'>13 March 2021</span>
                <h1 className='cart-title' style={{lineHeight: 1.15}}>Maize trade offer Aboti canvassing Jalgaon</h1>
                <p className='sub-title my-2' style={{lineHeight: 1.15}}>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Kabuli</p>
                <div className='divider1 my-4'>
                    <div className='gradient-background1'></div>
                    <div className='gradient-dot me-2'></div>
                    <span>HIGHLIGHTS</span>
                    <div className='gradient-dot ms-2'></div>
                    <div className='gradient-background2'></div>
                </div>
                <div style={{lineHeight: 1.15}}>
                    <div className='flex mt-2'>
                        <div className='w-[7%] h-[24px]'>
                            <img className='w-full h-full' src={opn} alt="" />
                        </div>
                        <p className='w-[94%] text-left ms-1' style={{color: 'var(--black)',fontSize: '15px', fontWeight: 500, lineHeight: 1.15}}>Trading Activity Very Dull in Chana and rate down</p>
                        </div>
                        <div className='flex mt-2'>
                            <div className='w-[7%] h-[24px]'>
                                <img className='w-full h-full' src={cub} alt="" />
                            </div>
                            <p className='w-[94%] text-left ms-1' style={{color: 'var(--black)',fontSize: '15px', fontWeight: 500, lineHeight: 1.15}}>Trading Activity Very Dull in Chana and rate down</p>
                        </div>
                    </div>
                <p className='load-more text-right me-2' style={{color: '#0006CC'}}><i>Load More Reports {'>'}</i></p>
            </div>
            <DetailPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
        </div>

        <div className='banner-img my-3'>
            <img src={banner2} alt="" />
        </div>
    </div>
  )
}

export default NewsCard
