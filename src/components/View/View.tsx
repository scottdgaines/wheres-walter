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
    const [navigationArray, setNavigationArray] = React.useState<Notice[]>([])
    const { id: noticeId } = useParams<{ id: string }>()
    const noticeIdNum = noticeId && parseInt(noticeId || '', 0)
    const navigate = useNavigate()

    const createNavigationArray = () => {
        const sortedNotices = notice && notices.filter(index => {
            return index.noticeType === notice.noticeType
        })
        if (sortedNotices) {
            setNavigationArray(sortedNotices)
        }
    }

    React.useEffect(() => {
        const targetedNotice = notices.find(notice => {
            return notice.id === noticeIdNum
        })

        if (targetedNotice) {
            setNotice(targetedNotice);
            setImage(targetedNotice.images[0])
            createNavigationArray()
        }
        
    }, [noticeId, notices, notice])

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

    const findCurrentIndex = () => {
        return navigationArray && navigationArray.findIndex((element) => {
            return noticeIdNum === element.id
        })
    }

    const navigateNotices = (direction: string) => {
        let navIndex

        const currentIndex = findCurrentIndex()

        if (direction === 'prev' && currentIndex > 1) {
            navIndex = currentIndex - 1
        } else if (direction === 'prev' && currentIndex == 1) {
            navIndex = 0
        } else if (direction == 'prev' && currentIndex == 0) {
            navIndex = navigationArray.length
        } else if (currentIndex == 0){
            navIndex = 1
        } else if (currentIndex === navigationArray.length) {
            navIndex = 0
        } else {
            navIndex = currentIndex + 1
        }
        
        const navId = navigationArray[navIndex].id
        console.log('jello', navigationArray)
        navigate(`/${navId}`)
    }

    const errorMessage = 'Something went wrong. Please try again'
    const name = notice ? notice.petName : errorMessage
    const imageSRC = notice ? image : errorImage
    const description = notice && notice.petDescription
    const additionalImages = renderAdditionalImages()
    const noticeType = notice && notice.noticeType
    const prevButton = findCurrentIndex() > 0 && <button onClick={() => navigateNotices('prev')}>Previous</button>
    const nextButton = findCurrentIndex() < navigationArray.length && <button onClick={() => navigateNotices('next')}>Next</button>

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
            {prevButton}
            <Link to='/'>
                <img src={HomeIcon} className='navigation-link' />
            </Link>
            {nextButton}
        </div>
    </div>
  )
}

export default View

