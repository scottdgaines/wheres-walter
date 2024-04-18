import React, { useState } from 'react'
import { Notice } from '../../interfaces'
import Card from '../Card/Card'
import './Browse.css'
import { Link } from 'react-router-dom'

type BrowseProps = {
  lostNotices?: Notice[];
  foundNotices?: Notice[];
}

const Browse: React.FC<BrowseProps> = ({ lostNotices, foundNotices }) => {
  const notices = lostNotices ? lostNotices : foundNotices
  const title = lostNotices ? "Lost" : "Found"
  const [selected, setSelected] = useState(false)
  
  const cards = notices && notices.map(notice => {
    return <Card id={notice.id} notice={notice} />
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
