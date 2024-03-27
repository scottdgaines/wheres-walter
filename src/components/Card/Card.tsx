import React from 'react'
import { Link } from 'react-router-dom';
import { Notice } from '../../interfaces'
import './Card.css'

type CardProps = {
    id: number,
    notice: Notice;
}

const Card: React.FC<CardProps> = ({ id, notice }) => {
  return (
    <Link to={`/${id}`}>
      <div className='card'>
        <p>{notice.petName}</p>
        <img src={notice.images[0]} className='thumbnail' />
      </div>
    </Link>
  )
}

export default Card
