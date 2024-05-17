import React from 'react'
import { NoticeDetails } from '../../interfaces'
import Card from '../Card/Card'
import './Browse.css'

type BrowseProps = {
  lostNotices?: NoticeDetails[];
  foundNotices?: NoticeDetails[];
}

const Browse: React.FC<BrowseProps> = ({ lostNotices, foundNotices }) => {
  const notices = lostNotices ? lostNotices : foundNotices
  
  const cards = notices && notices.map(notice => {
    return <Card id={notice.id} notice={notice} />
  })

  return (
    <div>
      <div className='cards-container' >
        {cards}
      </div>
    </div>
  )
}

export default Browse
