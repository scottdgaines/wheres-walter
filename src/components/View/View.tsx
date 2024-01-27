import React from 'react'
import { Notice } from '../../interfaces'
import './View.css'
import errorImage from '../../assets/error-image.jpeg'
import { useParams } from 'react-router-dom'

type ViewProps = {
    id: number;
    notices: Notice[]
}

const View: React.FC<ViewProps> = ({ notices }) => {
    const [notice, setNotice] = React.useState<Notice | null>(null)
    const { id } = useParams()

    const target = () => {
        if (notices) {
            notices.forEach(notice => {
                if (notice.id === Number(id)) {
                    setNotice(notice)
                }
            }) 
        }   
    }
    console.log('notice', notice)

    React.useEffect(() => {
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
