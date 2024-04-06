import React from 'react'
import { Notice } from '../../interfaces'
import './View.css'
import errorImage from '../../assets/error-image.jpeg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import HomeIcon from '../../assets/home-icon.png'

type ViewProps = {
    notices: Notice[]
}

const View: React.FC<ViewProps> = ({ notices }) => {
    const [notice, setNotice] = React.useState<Notice | null>(null)
    const [image, setImage] =  React.useState<string | null>()
    const { id: noticeId } = useParams<{ id: string }>()
    const navigate = useNavigate()

    React.useEffect(() => {
        const noticeIdNum = parseInt(noticeId || '', 1)
        const targettedNotice = notices.find(notice => {
            return notice.id === noticeIdNum
        })
        if (targettedNotice) {
            setNotice(targettedNotice);
            setImage(targettedNotice.images[0])
        }
     
    }, [noticeId, notices])

    const handleImageSelection = (imgURL: string) => {
        setImage(imgURL)
    }

    const renderAdditionalImages = () => {
        if (notice && notice.images.length > 1) {
            return notice.images.map(img => {
                return <img src={img} className='thumbnail' onClick={() => handleImageSelection(img)} />
            })
        }
    }

    const NavigateToNextNotice = () => {
        const sortedNotices = notices.sort((notice1, notice2) => {
            return notice1.id - notice2.id
        })
        console.log('sorted', sortedNotices)
        // navigate(`/${nextNoticeId}`);
    }
    
    const errorMessage = 'Something went wrong. Please try again'
    const name = notice ? notice.petName : errorMessage
    const imageSRC = notice ? image : errorImage
    const description = notice && notice.petDescription
    const additionalImages = renderAdditionalImages()
    const noticeType = notice && notice.noticeType

  return (
    <div className="view-container">
        {/* <p>{noticeType}</p> */}
        <h1 className='name'>{name}</h1>
        <div className='image-container'>
            <img src={imageSRC} className='main-image' /> 
            <div className='thumbnail-container'>
                {additionalImages}
            </div>
        </div>
        <h2>Description</h2>
        <p>{description}</p>
        <div className='navigation-container'>
            <Link to='/'>
                <img src={HomeIcon} className='navigation-link' />
            </Link>
            <button onClick={NavigateToNextNotice}>Next</button>
        </div>
    </div>
  )
}

export default View

