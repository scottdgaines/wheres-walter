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
        <div>
            {comments}
            <label>Leave a comment 
                <input
                    type='text' />
            </label>
            <button>Leave Comment</button>
        </div>
    )
};

export default Comments
