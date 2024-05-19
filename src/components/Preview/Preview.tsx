import React, { useEffect, useState } from 'react';
import { NoticeInterface } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import '../View/View.css';
import './Preview.css';
import '../Form/Form.css';
import Notice from '../Notice/Notice';
import { previewData } from '../../previewData';
import { data } from '../../data';
import prevButton from '../../assets/prev-icon.png';

const Preview = () => {
    const [notice, setNotice] = useState<NoticeInterface>();
    const navigate = useNavigate();

    useEffect(() => {
        setNotice(previewData[0]);
    }, []);

    const handleClick = () => {
        navigate(-1);
        previewData.pop();
    };

    const handleSubmit = () => {
        if (notice) {
            previewData.pop();
            data.push(notice);
            navigate('/');
        };
    };
    
    return (
        <div>
            <img src={prevButton} className='nav-button' onClick={handleClick}/>
            <Notice notice={notice} />
            <div className='button-container'>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
};

export default Preview
