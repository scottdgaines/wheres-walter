import React, { useEffect, useState } from 'react'
import { Notice } from '../../interfaces'
import './View.css'
import errorImage from '../../assets/error-image.jpeg'

type ViewProps = {
    id: number;
    notices: Notice[]
}

const View: React.FC<ViewProps> = ({ id, notices }) => {
    const [notice, setNotice] = useState<Notice | null>(null)

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
    
    const errorMessage = 'Something went wrong. Please try again'
    const name = notice ? notice.petName : errorMessage
    const mainImageSRC = notice ? notice.mainImage : errorImage

  return (
    <div>
        <h1>{name}</h1>
        <img src={mainImageSRC} className='main-image' /> 
    </div>
  )
}

export default View
