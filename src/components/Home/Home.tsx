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
    const [foundSelected, setFoundSelected] = useState<boolean>(false)
    const [lostSelected, setLostSelected] = useState<boolean>(true)

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

    const toggleSelected = (categ: string) => {
      console.log('jello')
      if (categ == 'Lost' && !lostSelected) {
        setLostSelected(true) 
        setFoundSelected(false)
      } else if ( categ == 'Found' && !foundSelected) {
        setFoundSelected(true)
        setLostSelected(false)
      }

    }

  return (
    <div className='browse-container'>
        <Browse lostNotices={lostNotices} toggleSelected={toggleSelected} selected={lostSelected} />
        <Browse foundNotices={foundNotices} toggleSelected={toggleSelected} selected={foundSelected} />
    </div>
  )
}

export default Home
