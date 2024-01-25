import React from 'react'
import { Notice } from '../../interfaces'
import Card from '../Card/Card'
import './Browse.css'

type BrowseProps = {
  lostNotices?: Notice[];
  foundNotices?: Notice[];
}

const Browse: React.FC<BrowseProps> = ({ lostNotices, foundNotices }) => {
  const notices = lostNotices ? lostNotices : foundNotices
  const title = lostNotices ? "Lost" : "Found"
  
  const cards = notices && notices.map(notice => {
    return <Card notice={notice} />
  })

  return (
    <div>
      <p className='title'>{title}</p>
      <div className='cards-container'>
        {cards}
      </div>
    </div>
  )
}

export default Browse
