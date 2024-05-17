import React from 'react';
import { Link } from 'react-router-dom';
import { NoticeInterface } from '../../interfaces';
import './Card.css';

type CardProps = {
    id: number,
    notice: NoticeInterface
};

const Card: React.FC<CardProps> = ({ id, notice }) => {
  const tagColor = notice.noticeType === 'Lost' ? 'lost' : 'found';

  return (
    <Link to={`/${id}`} className='link'>
      <div className='card-hover-container'>
        <div className={`card-tag ${tagColor}`}>{notice.noticeType}</div>
        <div className='card'>
          <h3>{notice.petName}</h3>
          <img src={notice.images[0]} className='thumbnail' />
        </div>
      </div>
    </Link>
  )
};

export default Card
