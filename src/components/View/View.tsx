import React from 'react'
import { Notice } from '../../interfaces'
import './View.css'
import errorImage from '../../assets/error-image.jpeg'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import HomeIcon from '../../assets/home-icon.png'

type ViewProps = {
    id: number;
    notices: Notice[]
}

const View: React.FC<ViewProps> = ({ notices }) => {
    const [notice, setNotice] = React.useState<Notice | null>(null)
    const { id } = useParams<{ id: string }>()
    const [image, setImage] =  React.useState<string | null>()

    
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

    React.useEffect(() => {
        if (notice) {
            setImage(notice.images[0])
        }
    }, [notice])

    const handleClick = (imgURL: string) => {
        setImage(imgURL)
    }

    const renderAdditionalImages = () => {
        if (notice && notice.images.length > 1) {
            return notice.images.map(img => {
                return <img src={img} className='thumbnail' onClick={() => handleClick(img)} />
            })
        }
    }
    
    const errorMessage = 'Something went wrong. Please try again'
    const name = notice ? notice.petName : errorMessage
    const imageSRC = notice ? image : errorImage
    const description = notice && notice.petDescription
    const additionalImages = renderAdditionalImages()
    const noticeType = notice && notice.noticeType

  return (
    <div className="view-container">
        <p>{noticeType}</p>
        <h1 className='name'>{name}</h1>
        <div className='image-container'>
            <img src={imageSRC} className='main-image' /> 
            <div className='thumbnail-container'>
                {additionalImages}
            </div>
        </div>
        <h2>Description</h2>
        <p>{description}</p>
        <Link to='..'>
            <img src={HomeIcon} className='navigation-link' />
        </Link>
    </div>
  )
}

export default View
