import React from 'react'
import { Notice } from '../../interfaces'

type CardProps = {
    notice: Notice;
}

const Card: React.FC<CardProps> = ({ notice }) => {
  return (
    <div>
      <p>{notice.petName}</p>
    </div>
  )
}

export default Card
