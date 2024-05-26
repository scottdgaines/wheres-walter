import React from 'react'
import './Comment.css'
import { Reply } from '../../interfaces'

type CommentProps = {
    key: number;
    id: number;
    username: string;
    comment: string;
    replies?: Reply[];

};

const Comment: React.FC<CommentProps> = ({ key, id, username, comment, replies }) => {

  const replyComments = replies && replies.map(reply => {
    return <Comment 
        key={reply.id} 
        id={reply.id} 
        username={reply.username} 
        comment={reply.comment} 
      />
  })

  return (
    <div className='comment-reply-container'>
      <div className='comment-container'>
        <p className='comment-username'>{username}</p>
        <p className='comment-comment'>"{comment}"</p>
        {replyComments}
      </div>
    </div>
  )
};

export default Comment
