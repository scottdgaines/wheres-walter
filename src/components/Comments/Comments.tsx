import React, { useState } from 'react';
import './Comments.css';
import { NoticeInterface } from '../../interfaces';
import Comment from '../Comment/Comment';
import { data } from '../../data'
import CommentClass from '../../CommentClass';
import replyIcon from '../../assets/reply-icon.png'

type CommentsProps = {
    notice: NoticeInterface;
};

const Comments: React.FC<CommentsProps> = ({ notice }) => {
    const [username, setUsername] = useState<string>()
    const [entry, setEntry] = useState<string>()
    const [update, setUpdate] = useState<boolean>(false)

    const comments = notice && notice.comments.map(entry => {
        const replies = entry.replies.length > 0 && entry.replies.map(reply => {
            return (
                <div className='reply'>
                    <img src={replyIcon} className='reply-icon' />
                    <Comment 
                        key={reply.id} 
                        id={reply.id} 
                        username={reply.username} 
                        comment={reply.comment}
                    />
                </div>
            )
        })

        return (
            <Comment 
                key={entry.id} 
                id={entry.id} 
                notice={notice}
                username={entry.username} 
                comment={entry.comment} 
                replies={replies}
                update={update}
                setUpdate={setUpdate}
            />
    )});

    const handleClick = () => {
        const targetId = notice.id
        const targetNotice = data.find(notice => {
            return notice.id === targetId
        })
        const entryId = targetNotice.comments.length 
        const newComment = new CommentClass(entryId, username, entry)

        targetNotice.comments.push(newComment)
        setUsername('')
        setEntry('')
    };

    return (
        <div className='view-container'>
            <div className='prev-comment-container'>
                {comments}
            </div>
            <div className='new-comment-container'>
                <div className='input-container'>
                    <input  
                        type='text'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} 
                        />
                    <label>Username</label>
                </div>
                    <div className='input-container'>
                        <input
                            type='text'
                            className='comment-input'
                            value={entry} 
                            onChange={(event) => setEntry(event.target.value)}
                            />
                        <label>Leave a comment</label>
                    </div>
                <button className='comment-button' onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
};

export default Comments
