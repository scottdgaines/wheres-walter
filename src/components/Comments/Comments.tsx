import React, { useEffect, useState } from 'react';
import './Comments.css';
import { NoticeInterface } from '../../interfaces';
import Comment from '../Comment/Comment';

type CommentsProps = {
    notice: NoticeInterface;
};

const Comments: React.FC<CommentsProps> = ({ notice }) => {
    const [commentsArray, setCommentsArray] = useState([])

    useEffect(() => {
            setCommentsArray(notice.comments)
    }, [notice])

    const comments = notice.comments.length > 0 && notice.comments.map(entry => {
        return <Comment 
            key={entry.id} 
            id={entry.id} 
            username={entry.username} 
            comment={entry.comment} 
        />
    });

    return (
        <div>
            {comments}
            <label>Leave a comment 
                <textarea />
            </label>
            <button>Leave Comment</button>
        </div>
    )
};

export default Comments
