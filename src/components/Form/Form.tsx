import React, { useState, createRef } from 'react'
import Notice from '../../Notice'
import { data } from '../../data'
import './Form.css'

const Form = () => {
    const [noticeType, setNoticeType] = useState<string>('Lost')
    const [petName, setPetName] = useState<string>('')
    const [images, setImages] = useState<string[] | []>([])
    const [petSpecie, setPetSpecie] = useState<string>('Dog')
    const [petBreed, setPetBreed] = useState<string>('')
    const [petDescription, setPetDescription] = useState<string>('')
    const [dateLost, setDateLost] = useState<string>('')
    const [chipNum, setChipNum] = useState<string>('')
    const fileInputRef = createRef<HTMLInputElement>()

    const addImages = () => {
        if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files.length) {
            setImages([fileInputRef.current.files[0].name])
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addImages()
        const notice = new Notice(noticeType, petName, images, petSpecie, petBreed, chipNum)
        console.log(notice)
        data.push(notice)
    }

    return (
        <div className='form-container'>
            <h1>Create a New Notice</h1>
            <form onSubmit={handleSubmit}>
            <br/>
            <label>
                    Notice Type
                    <select value={noticeType} onChange={(event) => setNoticeType(event.target.value)}>
                        <option value='Lost'>Lost</option>
                        <option value='Found'>Found</option>
                    </select>
                </label>
                <br/>
                <label>
                    Pet Name
                    <input 
                        name='petName' 
                        type='text' 
                        value={petName} 
                        onChange={(event) => setPetName(event.target.value)} 
                    />
                </label>
                <br/>
                <label>
                    Pet Specie
                    <select value={petSpecie} onChange={(event) => setPetSpecie(event.target.value)}>
                        <option value='Dog'>Dog</option>
                        <option value='Cat'>Cat</option>
                        <option value='Bird'>Bird</option>
                        <option value='Snake'>Snake</option>
                        <option value='Spider'>Spider</option>
                    </select>
                </label>
                <br/>
                <label>
                    Pet Breed
                    <input
                        name='petBreed'
                        type='text'
                        value={petBreed}
                        onChange={(event) => setPetBreed(event.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Please Describe the Animal's Appearance:
                    <input 
                        type='text' 
                        value={petDescription}
                        onChange={(event) => setPetDescription(event.target.value)}
                    />
                </label>
                <br/>
                <label>
                    When did you lose or find the animal?
                    <input 
                        type='text'
                        value={dateLost}
                        placeholder='mm/dd/yyyy'
                        onChange={(event) => setDateLost(event.target.value)}
                    />
                </label>
                <br/>
                <label>
                    If the animal has a chip, please enter the number here:
                    <input 
                        type='text'
                        value={chipNum}
                        onChange={(event) => setChipNum(event.target.value)}
                    />
                </label>
                <label>
                    Images
                    <input 
                        type='file'
                        ref={fileInputRef}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form

// id: 12,
//         noticeType: 'Found',
//         petName: 'Tum Tums',
//         images:['https://www.catster.com/wp-content/uploads/2023/11/Calico-Cat-2.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETVpX-ScEmRQA6Y77k3myOBgmUJQx4FEzkDbQUPJwUSMFDYVjFWMWFwW7-HhPnaqzhzM&usqp=CAU'],
//         petBreed: 'Calico',
//         petSpecie: 'Cat',
//         petDescription: 'Orange, black, and white calico, with green eyes',
//         dateLost: '03/17/2023',
//         chipNum: 1234567,
//         petNotes: 'Found near the corner of 10th and irving',
//         contactNum: '123-456-7890',
//         contactEmail: 'example@example.com',
//         reward: null
