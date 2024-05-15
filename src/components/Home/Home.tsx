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
    const [selected, setSelected] = useState<string>('Lost')

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

    const titleStyling = selected == 'Found' && selected
      
    useEffect(() => {
      sortNotices()
      setSelected('Lost')
      console.log(selected)
    }, [notices])  

    const browseComponent = selected == 'Lost' ?   <Browse lostNotices={lostNotices} /> : <Browse foundNotices={foundNotices} />
      
  return (
    <div>
      <div className='title-container'>
        <p className={`title ${titleStyling}`} onClick={() => setSelected('Lost')}>Lost</p>
        <p className='title' onClick={() => setSelected('Found')}>Found</p>
      </div>
      <div className='browse-container'>
      {browseComponent}
      </div>

    </div>
  )
}

export default Home
