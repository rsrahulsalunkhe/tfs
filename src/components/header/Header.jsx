import React from 'react'
import './style.scss'
import whatsapp from './../../assets/whatsapp.svg'
import dialer from './../../assets/dialer.svg'
import leftArrow from './../../assets/left-arrow.svg'
import { useNavigate, useParams } from 'react-router-dom'
import ContentWrapper from './../contentWrapper/ContentWrapper'
// import ReactWhatsapp from 'react-whatsapp'
import { WhatsappShareButton } from "react-share";

const Header = (props) => {
  const navigate = useNavigate()
  const { categorieType } = useParams()
  return (
    <div className='header ps-4'>
      <ContentWrapper>
        {props.title != 'home' && <img onClick={() => navigate(-1)} src={leftArrow} alt="" />}
        <div className='flex flex-col text-left' style={{lineHeight: 1}}>
          {props.title != 'detail' ? <span>{categorieType}</span> : <span>{props.title}</span>}
          {(props.title != 'categorie' && props.title != 'home' && props.title != 'detail')  && <span style={{fontSize: '16px', textTransform: 'capitalize'}}>{props.title}</span>}
          {props.title == 'home'  && <span style={{fontSize: '20px', textTransform: 'capitalize'}}>{props.title}</span>}
        </div>
        <div className='flex ms-auto icons'>
            {/* <ReactWhatsapp number="+91 9172680961" message="Hello World!!!"></ReactWhatsapp> */}
            <WhatsappShareButton url='hii'><img src={whatsapp} alt="" /></WhatsappShareButton>
            <a className='ms-4' href="tel:+91 9172680961"><img style={{width: '18px'}} src={dialer} alt="" /></a>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Header
