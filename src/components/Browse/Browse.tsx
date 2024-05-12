import React from 'react'
import { Notice } from '../../interfaces'
import Card from '../Card/Card'
import './Browse.css'
import { Link } from 'react-router-dom'

type BrowseProps = {
  lostNotices?: Notice[];
  foundNotices?: Notice[];
  selected?: boolean;
  toggleStyling?: MouseEventHandler<HTMLParagraphElement>;
}

const Browse: React.FC<BrowseProps> = ({ lostNotices, foundNotices, selected }) => {
  const notices = lostNotices ? lostNotices : foundNotices
  
  const cards = notices && notices.map(notice => {
    return <Card id={notice.id} notice={notice} />
  })

  const dynamicStyling = selected ? 'selected' : 'unselected'

  return (
    <div>
      <div className={`cards-container ${dynamicStyling}`} >
        {cards}
      </div>
    </div>
  )
}

export default Browse
