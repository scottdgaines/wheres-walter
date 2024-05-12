import React, { useState, useEffect } from 'react'
import Browse from '../Browse/Browse'
import { Notice } from '../../interfaces'
import './Home.css'

type HomeProps = {
    notices: Notice[];
}

const Home: React.FC<HomeProps> = ({ notices }) => {
    const [lostNotices, setLostNotices] = useState<Notice[]>([])
    const [foundNotices, setFoundNotices] = useState<Notice[]>([])
    const [lostSelected, setLostSelected] = useState<boolean>(true)
    const [foundSelected, setFoundSelected] = useState<boolean>(false)
    let styling

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

    const toggleSelected = (category: string) => {
      if (category == 'Lost' && !lostSelected) {
        setLostSelected(true)
        setFoundSelected(false)
      } else if (category == 'Found' && lostSelected) {
        setLostSelected(false)
        setFoundSelected(true)
      }
    }
      
    useEffect(() => {
      sortNotices()
    }, [notices])  

      
  return (
    <div>
      <div className='title-container'>
        <p className={`title ${styling}`} onClick={() => toggleSelected('Lost')}>Lost</p>
        <p className={`title ${styling}`} onClick={() => toggleSelected('Found')}>Found</p>
      </div>
      <div className='browse-container'>
          <Browse lostNotices={lostNotices} selected={lostSelected} />
          <Browse foundNotices={foundNotices} selected={foundSelected} />
      </div>

    </div>
  )
}

export default Home
