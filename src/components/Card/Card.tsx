import React from 'react'
import { Notice } from '../../interfaces'
import './Card.css'

type CardProps = {
    notice: Notice;
}

const Card: React.FC<CardProps> = ({ notice }) => {
  return (
    <div className='card'>
      <p>{notice.petName}</p>
      <img src={notice.mainImage} className='thumbnail' />
    </div>
  )
}

export default Card
