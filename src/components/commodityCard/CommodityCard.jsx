import React from 'react'
import './style.scss'
import { useNavigate } from "react-router-dom"
import sentiment from './../../assets/sentiment.svg'
import timeline from './../../assets/timeline.svg'
import coverage from './../../assets/coverage.svg'


const CommodityCard = (props) => {
  const navigate = useNavigate()
  return (
    <div className='card lg:w-[32%]' onClick={() => navigate(`/${props.pageType}/${props.categorie}`)}>
      <div className='circle'><img src={props.img} alt={props.img} /></div>
      {props.routPageType === props.pageType ? 
      <div className='card-title'>{props.categorie}<br />Home</div> : 
      <div className='card-title'>{props.categorie}<br />{props.pageType}</div> }
      <div className='btn'>{props.btnname + " >"}</div>
    </div>
  )
}

export default CommodityCard
