import React from 'react'
import './style.scss'
import chana from './../../assets/chana.jpg'
import CommodityCard from '../../components/commodityCard/CommodityCard'
import sentiment from './../../assets/sentiment.svg'
import timeline from './../../assets/timeline.svg'
import coverage from './../../assets/coverage.svg'
import { useParams } from 'react-router-dom'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import star1 from './../../assets/star1.svg'
import star2 from './../../assets/star2.svg'

const HeroSection = (props) => {
    const { categorieType } = useParams()

  return (
    <div className='mx-2 mb-4'>
      <ContentWrapper>
        <div className='lg:flex lg:mt-5 lg:gap-10 lg:justify-start'>
        <div className='side-img lg:block'>
            <img className='w-full h-full' src={chana} alt="" />
        </div>

        <div className='flex flex-col'>
            <div className='main-title'><p className=''>Everything here is {categorieType} Exclusive</p></div>
            <div className='w-full flex justify-center items-center'>
              <div style={{width: '18px', height: '18px'}}>
                <img src={star1} alt="" />
              </div>
              <div style={{fontSize: "15px", fontWeight: 500}}><span><i style={{fontWeight: 800}}>Premium</i> Member Offers for you</span></div>
              <div style={{width: '18px', height: '18px'}}>
                <img src={star2} alt="" />
              </div>
            </div>
            <p style={{fontSize: "11px", fontWeight: 500}}><b>Up to 50% extra off on crores of products using supercoins</b></p>

            <div className='card-container'>
            <CommodityCard img={sentiment} routPageType={props.page} pageType='sentiment' categorie={categorieType} btnname='Check' />
            <CommodityCard img={timeline} routPageType={props.page} pageType='timeline' categorie={categorieType} btnname='Detail' />
            <CommodityCard img={coverage} routPageType={props.page} pageType='coverage' categorie={categorieType} btnname='Read' />
            </div>
        </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroSection
