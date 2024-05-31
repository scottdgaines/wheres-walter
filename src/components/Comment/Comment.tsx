import React from 'react'
import './Comment.css'

type CommentProps = {
    key: number;
    id: number;
    username: string;
    comment: string;
    replies?: React.JSX.Element[]
};

const Comment: React.FC<CommentProps> = ({ key, id, username, comment, replies }) => {

  return (
    <div className='comment-reply-container' >
      <div className='comment-container'>
        <p className='comment-username'>{username}</p>
        <p className='comment-comment'>"{comment}"</p>
      </div>
      {replies}
    </div>
  )
};

export default Comment
