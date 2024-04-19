import React, { useState, useEffect } from 'react';
import './View.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Notice } from '../../interfaces';
import errorImage from '../../assets/error-image.jpeg';
import homeIcon from '../../assets/home-icon.png';

type ViewProps = {
    notices: Notice[]
};

const View: React.FC<ViewProps> = ({ notices }) => {
    const [notice, setNotice] = useState<Notice | null>(null);
    const [image, setImage] =  useState<string | null>();
    const [navigationArray, setNavigationArray] = React.useState<Notice[]>([]);
    const { id: noticeId } = useParams<{ id: string }>();
    const noticeIdNum = noticeId && parseInt(noticeId || '', 0);
    const navigate = useNavigate();

    const createNavigationArray = () => {
        const sortedNotices = notice && notices.filter(index => {
            return index.noticeType === notice.noticeType
        })

        if (sortedNotices) {
            setNavigationArray(sortedNotices)
        }
    };

    useEffect(() => {
        const targetedNotice = notices.find(notice => {
            return notice.id === noticeIdNum
        })

        if (targetedNotice) {
            setNotice(targetedNotice);
            setImage(targetedNotice.images[0])
            createNavigationArray()
        }
        
    }, [noticeId, notices, notice]);

    const handleImageSelection = (imgURL: string) => {
        setImage(imgURL)
    };

    const renderAdditionalImages = () => {
        if (notice && notice.images.length > 1) {
            return notice.images.map(img => {
                return <img src={img} className='thumbnail' onClick={() => handleImageSelection(img)} />
            })
        }
    };

    const determineDate = () => {
        if (notice && notice.noticeType === 'Lost'){
            return `Missing since ${notice.dateLost}`
         } else if (notice && notice.noticeType == 'Found') {
            return `Found on ${notice.dateLost}`
         }
    }

    const determineContact = () => {
        if (notice && notice.noticeType === 'Lost') {
            return `If found, please contact us at ${notice.contactNum} and ${notice.contactEmail}`
        } else if (notice) {
            return `Contact us at ${notice.contactNum} or ${notice.contactEmail}`
        }
    }

    const findCurrentIndex = () => {
        return navigationArray && navigationArray.findIndex((element) => {
            return noticeIdNum === element.id
        })
    };

    const navigateNotices = (direction: string) => {
        let nextIndex

        const currentIndex = findCurrentIndex()

        if (direction === 'prev' && currentIndex > 1) {
            nextIndex = currentIndex - 1
        } else if (direction === 'prev' && currentIndex == 1) {
            nextIndex = 0
        } else if (currentIndex == 0){
            nextIndex = 1
        } else {
            nextIndex = currentIndex + 1
        }
        
        const navId = navigationArray[nextIndex].id

        navigate(`/${navId}`)
    };

    const errorMessage = 'Something went wrong. Please try again';
    const noticeType = notice && notice.noticeType;
    const name = notice && notice.petName;
    const breed = notice && notice.petBreed;
    const species = notice && notice.petSpecie;
    const date = determineDate()
    const description = notice ? notice.petDescription : errorMessage;
    const notes = notice && notice.petNotes
    const contact = determineContact()
    const imageSRC = notice ? image : errorImage;
    const additionalImages = renderAdditionalImages();
    const prevButton = findCurrentIndex() > 0 && <button className="nav-button left" onClick={() => navigateNotices('prev')}>Previous</button>;
    const nextButton = findCurrentIndex() < navigationArray.length - 1 && <button className="nav-button right" onClick={() => navigateNotices('next')}>Next</button>;
    const noticeBanner = notice && notice.noticeType == "Lost" ? "notice-banner lost" : "notice-banner found";

  return (
    <>
        <div className='navigation-container'>
            {prevButton}
            <Link to='/'>
                <img src={homeIcon} className='home-button' />
            </Link>
            {nextButton}
        </div>
        <div className="view-container">
            <p className={noticeBanner}>{noticeType}</p>
            <div className='all-content-container'>
                <div className='image-container'>
                    <img src={imageSRC} className='main-image' /> 
                    <div className='thumbnail-container'>
                        {additionalImages}
                    </div>
                </div>
                <div className='information-container'>
                    <h1 className='name'>{name}</h1>
                    <p className='breed-tag'>{breed} {species}</p>
                    <p>{date}</p>
                    <h2>Description</h2>
                    <p>{description}</p>
                    <p>{notes}</p>
                    <p>{contact}</p>
                </div>
            </div>
        </div>
    </>
  )
};

export default View

