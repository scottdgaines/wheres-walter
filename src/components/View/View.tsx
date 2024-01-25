import React, { useEffect, useState } from 'react'
import { Notice } from '../../interfaces'

type ViewProps = {
    id: number;
    notices: Notice[]
}

const View: React.FC<ViewProps> = ({ id, notices }) => {
    const [notice, setNotice] = useState({})

    const target = () => {
        if (notices) {
            notices.forEach(notice => {
                if (notice.id === id) {
                    setNotice(notice)
                }
            }) 
        }   
    }
    console.log('notice', notice)

    useEffect(() => {
        target()
    }, [])

  return (
    <div>
      <p>view</p>
      <p>{notice.petName}</p>
    </div>
  )
}

export default View
