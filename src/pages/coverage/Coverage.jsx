import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

const Coverage = () => {
  return (
    <div className='text-center'>
      <Header title='coverage' />
      <HeroSection page='coverage' />
      <ContentWrapper></ContentWrapper>
    </div>
  )
}

export default Coverage
