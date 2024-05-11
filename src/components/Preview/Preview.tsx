import React, { useEffect, useState } from 'react'
import '../View/View.css'
import Notice from '../Notice/Notice'
import { previewData } from '../../previewData'
import { data } from '../../data'
import { useNavigate } from 'react-router-dom'
import { NoticeDetails } from '../../interfaces'
import '../Form/Form.css'
import prevButton from '../../assets/prev-icon.png'
import './Preview.css'

const Preview = () => {
    const [notice, setNotice] = useState<NoticeDetails>()
    const navigate = useNavigate()

    useEffect(() => {
        setNotice(previewData[0])
        console.log('prev notice', notice)
    }, [])

    const handleClick = () => {
        navigate(-1)
    }

    const handleSubmit = () => {
        previewData.pop()
        data.push(notice)
        navigate('/')
    }
    
    return (
        <div>
            <img src={prevButton} className='nav-button' onClick={handleClick}/>
            <Notice notice={notice} />
            <div className='button-container'>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Preview
