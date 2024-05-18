import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NoticeInterface } from '../../interfaces';
import './View.css';
import Notice from '../Notice/Notice';
import Nav from '../Nav/Nav';

type ViewProps = {
    notices: NoticeInterface[];
};

const View: React.FC<ViewProps> = ({ notices }) => {
    const [notice, setNotice] = useState<NoticeInterface | null>(null);
    const { id: noticeId } = useParams<{ id: string }>();
    const noticeIdNum = noticeId && parseInt(noticeId || '', 0);
    const [navigationArray, setNavigationArray] = useState<NoticeInterface[]>([]);

    const createNavigationArray = () => {
        const sortedNotices = notice && notices.filter(index => {
            return index.noticeType === notice.noticeType
        });
        
        if (sortedNotices) {
            setNavigationArray(sortedNotices);
        };
    };

    useEffect(() => {
        const targetedNotice = notices.find(notice => {
            return notice.id === noticeIdNum;
        });

        if (targetedNotice) {
            setNotice(targetedNotice);
            createNavigationArray();
        };
        
    }, [noticeId, notices, notice]);


  return (
    <div className='background'>
        <Nav noticeIdNum={noticeIdNum} navigationArray={navigationArray} />
        <Notice notice={notice} />
    </div>
  )
};

export default View

