import React from 'react';
import './Comments.css';
import { NoticeInterface } from '../../interfaces';
import Comment from '../Comment/Comment';

type CommentsProps = {
    notice: NoticeInterface;
};

const Comments: React.FC<CommentsProps> = ({ notice }) => {

    const comments = notice && notice.comments.map(entry => {
        return <Comment 
            key={entry.id} 
            id={entry.id} 
            username={entry.username} 
            comment={entry.comment} />
    })

    return (
        <div className='view-container'>
            {comments}
            <div className='new-comment-container'>
                <label>Leave a comment</label>
                <div className='new-comment'>
                    <input
                        type='text'
                        className='comment-input' 
                    />
                    <button className='comment-button'>Leave Comment</button>
                </div>
            </div>
        </div>
    )
};

export default Comments
