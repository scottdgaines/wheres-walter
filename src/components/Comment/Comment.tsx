import React from 'react'
import './Comment.css'

type CommentProps = {
    key: number;
    id: number;
    username: string;
    comment: string;
};

const Comment: React.FC<CommentProps> = ({ key, id, username, comment }) => {
  return (
    <div className='comment'>
      <p className='comment-username'>{username}</p>
      <p className='comment-comment'>"{comment}"</p>
    </div>
  )
};

export default Comment
