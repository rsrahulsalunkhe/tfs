import React, { useState } from 'react'
import './style.scss'
import NewsCard from '../../components/newsCard/NewsCard'
import bannerImg from './../../assets/banner.jpeg'
import Header from '../../components/header/Header'
import { useParams } from "react-router-dom";
import seperatorLine from './../../assets/seperator-line.svg'
import HeroSection from '../../components/heroSection/HeroSection'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

const Categories = () => {
  const { categorieType } = useParams()
  return (
    <div className='text-center'>
        <Header />

        <ContentWrapper>

          <div className='categorie-container'>
            <HeroSection />

            <div className='flex justify-center pt-6'>
              <img className='lg:w-[50%] w-[80%]' src={seperatorLine} alt="" />
            </div>

            <div className='image-container'>
              <div className='header-title'>
                <span className='title'>This is title</span>
                <span className='sub-title'>This is sub title</span>
              </div>
              <div className='imgCard gap-[1.5%]'>
                <img className='lg:w-[32%] mb-2' src={bannerImg} alt="" />
                <img className='lg:w-[32%] mb-2' src={bannerImg} alt="" />
                <img className='lg:w-[32%] mb-2' src={bannerImg} alt="" />
                <img className='lg:w-[32%] mb-2' src={bannerImg} alt="" />
              </div>
            </div>

            <div className='news-container'>
              <div className='header-title'>
                <span className='title'>This is title</span>
                <span className='sub-title'>This is sub title</span>
              </div>
              <NewsCard categorie={categorieType} />
              <NewsCard categorie={categorieType} />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
            <div className='load-btn py-3'>LOAD MORE REPORTS</div>
          </div>
        </ContentWrapper>
    </div>
  )
}

export default Categories
