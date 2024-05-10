import React from 'react'
import '../Notice/Notice.css'
import { preview } from '../../preview'
import { data } from '../../data'
import { useNavigate } from 'react-router-dom'
import { Notice } from '../../interfaces'
import '../Form/Form.css'
import prevButton from '../../assets/prev-icon.png'
import './Preview.css'

const Preview = () => {
    const navigate = useNavigate()
    const notice: Notice = preview[0]
    const dynamicVerb = notice.noticeType === 'Lost' ? 'lost' : 'found'

    const handleSubmit = () => {
        preview.pop()
        data.push(notice)
        navigate('/')
    }

    return (
        <div>
            <img src={prevButton} className='nav-button' onClick={() => navigate(-1)} />
            <p>Notice Type:{notice.noticeType}</p>
            <p>Pet Name: {notice.petName}</p>
            <p>Pet Specie: {notice.petSpecie}</p>
            <p>Pet Breed: {notice.petBreed}</p>
            <p>Animal's Appearance: {notice.petDescription}</p>
            <p>Date {dynamicVerb}: {notice.dateLost}</p>
            <p>Chip Number: {notice.chipNum}</p>
            <p>Notes: {notice.petNotes}</p>
            <button onClick={handleSubmit}>Submit</button>
            {/* <div className='information-container'>
                <h1>{notice.name}</h1>
                <p className='breed-tag'>{notice.} {species}</p>
                <p>{notice.dateLost}</p>
                <h2>Description</h2>
                <p>{notice.petDescription}</p>
            </div> */}
        </div>
    )
}

export default Preview
