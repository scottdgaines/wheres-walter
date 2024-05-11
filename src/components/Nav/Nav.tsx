import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'
import homeIcon from '../../assets/home-icon.png';
import prevIcon from '../../assets/prev-icon.png'
import nextIcon from '../../assets/next-icon.png'
import { NoticeDetails } from '../../interfaces'

type NavProps = {
    notices: NoticeDetails[]
    noticeIdNum: number | ', 0'
    navigationArray: NoticeDetails[]
};

const Nav: React.FC<NavProps> = ({ noticeIdNum, navigationArray }) => {
    const navigate = useNavigate()

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

    const prevButtonStyling = findCurrentIndex() > 0 ? 'nav-button' : 'nav-button disabled';
    const nextButtonStyling = findCurrentIndex() < navigationArray.length - 1 ? 'nav-button' : 'nav-button disabled'

    return (
        <div>
        <div className='navigation-container'>
                <img src={prevIcon} className={`${prevButtonStyling}`} onClick={() => navigateNotices('prev')} />
                <Link to='/'>
                    <img src={homeIcon} className='home-button' />
                </Link>
                <img src={nextIcon} className={`${nextButtonStyling}`} onClick={() => navigateNotices('next')} />
            </div>
        </div>
    )
}

export default Nav
