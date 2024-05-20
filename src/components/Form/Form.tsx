import React, { useState, createRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NoticeClass from '../../NoticeClass';
import { previewData } from '../../previewData';
import './Form.css';

const Form = () => {
    const [noticeType, setNoticeType] = useState<string>('Found');
    const [reward, setReward] = useState<boolean | null>(null);
    const [petName, setPetName] = useState<string>('');
    const [images, setImages] = useState<string[] | []>([]);
    const [petSpecie, setPetSpecie] = useState<string>('Dog');
    const [petBreed, setPetBreed] = useState<string>('');
    const [petSex, setPetSex] = useState<string>('');
    const [petDescription, setPetDescription] = useState<string>('');
    const [dateLost, setDateLost] = useState<string>('');
    const [chipNum, setChipNum] = useState<string>('');
    const [petNotes, setPetNotes] = useState<string>('');
    const [contactNum, setContactNum] = useState<string>('');
    const [contactEmail, setContactEmail] = useState<string>('');
    const fileInputRef = createRef<HTMLInputElement>();
    const navigate = useNavigate();

    const addImages = () => {
        if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files.length) {
            setImages([fileInputRef.current.files[0].name])
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addImages();
        const notice = new NoticeClass(noticeType, reward, petName, images, petSpecie, petBreed, petSex, petDescription, chipNum, petNotes, contactNum, contactEmail);
        if (notice) {
            previewData.push(notice); //updating Global State
            navigate(`/preview/${notice.id}`);
        };
    };

    const rewardInput = noticeType === 'Lost' &&  
        <div className='input-container'>
            <label>9. Are you offering a reward? </label>
            <select value={reward && reward.toString()} onChange={(event) => setReward(event.target.value === 'true')}>   
                <option value='true'>Yes</option>
                <option value='false'>No</option>
            </select>
        </div>;
    
    const dynamicVerbiage = noticeType === 'Lost' ? '7. When did you notice the animal was missing' : '7. When did you find the animal';

    return (
        <div className='form-container'>
            <h1>Create a New Notice</h1>
            <form onSubmit={handleSubmit}>
                <h2>Pet Information</h2>
                <div className='input-container'>
                    <label>1. Is the pet lost or found?</label>
                    <select value={noticeType} onChange={(event) => setNoticeType(event.target.value)}>
                        <option value='Lost'>Lost</option>
                        <option value='Found'>Found</option>
                    </select>
                </div>
                <div className='input-container'>
                    <label>2. What is their name?</label>
                    <input 
                        name='petName' 
                        type='text' 
                        value={petName} 
                        onChange={(event) => setPetName(event.target.value)} 
                    />
                </div>
                <div className='input-container'>
                    <label>3. What is the pet's species?</label>
                    <select value={petSpecie} onChange={(event) => setPetSpecie(event.target.value)}>
                        <option value='Dog'>Dog</option>
                        <option value='Cat'>Cat</option>
                        <option value='Bird'>Bird</option>
                        <option value='Snake'>Snake</option>
                        <option value='Spider'>Spider</option>
                    </select>
                </div>
                <div className='input-container'>
                    <label>4. What is their breed, if you know it?</label>
                    <input
                        name='petBreed'
                        type='text'
                        value={petBreed}
                        onChange={(event) => setPetBreed(event.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label>5. Is the pet male or female?</label>
                    <select value={petSex} onChange={(event) => setPetSex(event.target.value)}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div>
                <div className='input-container'>
                    <label>6. Please describe the animal's appearance:</label>
                    <textarea
                        className='text long'
                        value={petDescription}
                        onChange={(event) => setPetDescription(event.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label>{dynamicVerbiage}?</label>
                    <input 
                        type='text'
                        className='text'
                        value={dateLost}
                        placeholder='mm/dd/yyyy'
                        onChange={(event) => setDateLost(event.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label>8. If the animal has a chip, please enter the number here:</label>
                    <input 
                        type='text'
                        value={chipNum}
                        onChange={(event) => setChipNum(event.target.value)}
                    />
                </div>
                {rewardInput}
                <div className='input-container image'>
                    <label>Images</label>
                    <input 
                        type='file'
                        ref={fileInputRef}
                    />
                </div>
                <div className='input-container'>
                    <label>Please list any other relevent information (temperment, location last seen, etc)</label>
                    <textarea
                        className='text long'
                        value={petNotes}
                        onChange={(event) => setPetNotes(event.target.value)}
                    />
                </div>
                <h2>Contact Information</h2>
                <div className='input-container'>
                    <label>What phone number can be used to reach you?</label>
                    <input 
                        type='text'
                        className='text'
                        value={contactNum}
                        placeholder='123-456-7890'
                        onChange={(event) => setContactNum(event.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label>What email address can be used to reach you?</label>
                    <input 
                        type='text'
                        className='text'
                        value={contactEmail}
                        onChange={(event) => setContactEmail(event.target.value)}
                    />
                </div>
                <div className='button-container'>
                    <button type='submit' onClick={handleSubmit}>Preview</button>
                </div>
            </form>
        </div>
    )
};

export default Form
