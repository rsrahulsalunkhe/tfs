import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import SentimentCard from '../../components/sentimentCard/SentimentCard'
import HeroSection from '../../components/heroSection/HeroSection'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

const Sentiments = () => {
  return (
    <div className='text-center'>
      <Header title='sentiment' />
      <HeroSection page='sentiment' />
      <ContentWrapper>
        <div className='flex flex-wrap justify-between'>
          <SentimentCard />
          <SentimentCard />
          <SentimentCard />
        </div>
        <div className='load-btn py-3'>LOAD MORE REPORTS</div>
      </ContentWrapper>
    </div>
  )
}

export default Sentiments
