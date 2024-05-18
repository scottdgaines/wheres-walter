import React, { useEffect, useState } from 'react';
import { NoticeInterface } from '../../interfaces';
import './Notice.css';
import errorImage from '../../assets/error-image.jpeg';

type NoticeProps = {
  notice: NoticeInterface;
};

const Notice: React.FC<NoticeProps> = ({ notice }) => {
  const [image, setImage] =  useState<string | null>();

  useEffect(() => {
    if (notice) {
      setImage(notice.images[0]);
    };
  }, [notice]);

  const determineDate = () => {
    if (notice && notice.noticeType === 'Lost'){
        return `Missing since ${notice.dateLost}`;
     } else if (notice && notice.noticeType == 'Found') {
        return `Found on ${notice.dateLost}`;
     };
  };

  const determineContact = () => {
      if (notice && notice.noticeType === 'Lost') {
          return `If found, please contact us at ${notice.contactNum} and ${notice.contactEmail}`;
      } else if (notice) {
          return `Contact us at ${notice.contactNum} or ${notice.contactEmail}`;
      };
  };

  const renderAdditionalImages = () => {
    if (notice && notice.images.length > 1) {
        return notice.images.map(img => {
            return <img src={img} className='thumbnail' onClick={() => handleImageSelection(img)} />;
        });
    };
  };

  const handleImageSelection = (imgURL: string) => {
    setImage(imgURL);
  };
  
  const errorMessage = 'Something went wrong. Please try again';
  const noticeType = notice && notice.noticeType;
  const name = notice && notice.petName;
  const sex = notice && notice.petSex;
  const breed = notice && notice.petBreed;
  const species = notice && notice.petSpecie;
  const date = determineDate();
  const description = notice ? notice.petDescription : errorMessage;
  const notes = notice && notice.petNotes;
  const contact = determineContact();
  const imageSRC = notice ? image : errorImage;
  const additionalImages = renderAdditionalImages();
  const noticeBanner = notice && notice.noticeType == 'Lost' ? 'notice-banner lost' : 'notice-banner found';

  return (
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
              <p className='breed-tag'>A {sex} {breed} {species}</p>
              <p>{date}</p>
              <h2>Description</h2>
              <p>{description}</p>
              <p>{notes}</p>
              <p>{contact}</p>
          </div>
      </div>
    </div>
  )
};

export default Notice
