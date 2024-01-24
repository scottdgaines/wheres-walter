import React from 'react'
import { Notice } from '../../interfaces'
import Card from '../Card/Card'

type BrowseProps = {
  lostNotices?: Notice[];
  foundNotices?: Notice[];
}

const Browse: React.FC<BrowseProps> = ({ lostNotices, foundNotices }) => {
  let notices = lostNotices ? lostNotices : foundNotices

  const title = lostNotices ? "Lost" : "Found"
  
  const cards = notices && notices.map(notice => {
    return <Card notice={notice} />
  })

  return (
    <div>
      {title}
      {cards}
    </div>
  )
}

export default Browse
