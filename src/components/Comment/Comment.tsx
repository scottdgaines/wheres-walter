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
    <div>
      <p>{username}</p>
      <p>{comment}</p>
    </div>
  )
};

export default Comment
