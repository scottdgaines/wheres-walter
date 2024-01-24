import React, { useState, useEffect } from 'react'
import Browse from '../Browse/Browse'
import { Notice } from '../../interfaces'

type HomeProps = {
    notices: Notice[];
}

const Home: React.FC<HomeProps> = ({ notices }) => {
    const [lostNotices, setLostNotices] = useState<Notice[]>([])
    const [foundNotices, setFoundNotices] = useState<Notice[]>([])

    const sortNotices = () => {
        const newFoundNotices: Notice[] = []
        const newLostNotices: Notice[] = []

        notices.forEach(notice => {
          if (notice.noticeType === "Lost") {
            newLostNotices.push(notice)
          } else {
            newFoundNotices.push(notice)
          }
        })

        setLostNotices([...newLostNotices])
        setFoundNotices([...newFoundNotices])
      }
      
    useEffect(() => {
        sortNotices()
    }, [notices])  

  return (
    <div>
        <Browse lostNotices={lostNotices} />
        <Browse foundNotices={foundNotices} />
    </div>
  )
}

export default Home
