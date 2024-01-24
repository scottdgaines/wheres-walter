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
        console.log('useEffect count')
        notices.forEach(notice => {
          if (notice.noticeType === "Lost") {
            setLostNotices((prevLostNotices) => [...prevLostNotices, notice])
          } else {
            setFoundNotices((prevFoundNotices) => [...prevFoundNotices, notice])
          }
        })
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
