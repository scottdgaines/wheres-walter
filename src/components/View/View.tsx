import React from 'react'
import { Notice } from '../../interfaces'
import './View.css'
import errorImage from '../../assets/error-image.jpeg'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

type ViewProps = {
    id: number;
    notices: Notice[]
}

const View: React.FC<ViewProps> = ({ notices }) => {
    const [notice, setNotice] = React.useState<Notice | null>(null)
    const { id } = useParams<{ id: string }>()

    
    const findNotice = React.useCallback(() => {
        if (notices) {
           const target = notices.find(notice => {
                return notice.id === Number(id)
            })
            setNotice(target || null)
        }   
    }, [notices, id])

    React.useEffect(() => {
      findNotice()
    }, [findNotice])

    const renderAdditionalImages = () => {
        if (notice && notice.additionalImages.length != 0) {
            return notice.additionalImages.map(img => {
                return <img src={img} className='thumbnail' />
            })
        }
    }
    
    const errorMessage = 'Something went wrong. Please try again'
    const name = notice ? notice.petName : errorMessage
    const mainImageSRC = notice ? notice.mainImage : errorImage
    const description = notice && notice.petDescription
    const additionalImages = renderAdditionalImages()

  return (
    <div>
        <h1>{name}</h1>
        <img src={mainImageSRC} className='main-image' /> 
        {additionalImages}
        <h2>{description}</h2>
        <Link to='..'>Return to Dashboard</Link>
    </div>
  )
}

export default View
