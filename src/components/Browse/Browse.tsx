import React from 'react'
import { Notice } from '../../interfaces'
import Card from '../Card/Card'
import './Browse.css'
import { Link } from 'react-router-dom'

type BrowseProps = {
  lostNotices?: Notice[];
  foundNotices?: Notice[];
  toggleSelected?: (arg: string) => void;
  selected?: boolean;
}

const Browse: React.FC<BrowseProps> = ({ lostNotices, foundNotices, toggleSelected, selected }) => {
  const notices = lostNotices ? lostNotices : foundNotices
  const title = lostNotices ? 'Lost' : 'Found'
  
  const cards = notices && notices.map(notice => {
    return <Card id={notice.id} notice={notice} />
  })

  const handleClick = () => {
    if (toggleSelected) {
      toggleSelected(title)
    }
  }

  const highlight = selected ? 'cards-container selected' : 'cards-container'

  return (
    <div>
      <p className='title' onClick={handleClick}>{title}</p>
      <div className={highlight}>
        {cards}
      </div>
    </div>
  )
}

export default Browse
