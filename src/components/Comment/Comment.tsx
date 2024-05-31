import React, { useState } from 'react'
import './Comment.css'
import { NoticeInterface } from '../../interfaces'
import ReplyClass from '../../ReplyClass';
import replyIcon from '../../assets/reply-icon.png'

type CommentProps = {
    key: number;
    id: number;
    notice?: NoticeInterface;
    username: string;
    comment: string;
    replies?: React.JSX.Element[]
    update?: boolean;
    setUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Comment: React.FC<CommentProps> = ({ key, id, notice, username, comment, replies, update, setUpdate }) => {
  const [reply, setReply] = useState<boolean>(false)
  const [replyUsername, setReplyUsername] = useState<string>('')
  const [replyEntry, setReplyEntry] = useState<string>('')

  const toggleCommentBox = () => {
    setReply(!reply)

  }

  const handleClick = () => {
    const targetComment = notice && notice.comments.find(comment => {
      return comment.id == id
    })
    const replyId = targetComment.replies.length + 1
    const newReply = new ReplyClass(replyId, replyUsername, replyEntry)

    targetComment.replies.push(newReply)
    setReplyUsername('')
    setReplyEntry('')
    setUpdate(!update)
    setTimeout(toggleCommentBox, 1000)
  }

  const commentBox = reply &&  
    <div className='new-comment-container'>
      <div className='input-container'>
          <input  
              type='text'
              value={replyUsername}
              onChange={(event) => setReplyUsername(event.target.value)} 
              />
          <label>Username</label>
      </div>
          <div className='input-container'>
              <input
                  type='text'
                  className='comment-input'
                  value={replyEntry} 
                  onChange={(event) => setReplyEntry(event.target.value)}
                  />
              <label>Leave a Reply</label>
          </div>
      <button className='comment-button' onClick={handleClick}>Submit</button>
  </div>

  const replyButton = update &&  <img src={replyIcon} className='reply-button' onClick={toggleCommentBox}/>

  return (
    <div className='comment-reply-container' >
      <div className='comment-container'>
        <div className='username-button-container'>
          <p className='comment-username'>{username}</p>
          {replyButton}
        </div>
        <p className='comment-comment'>"{comment}"</p>
        {commentBox}
      </div>
      {replies}
    </div>
  )
};

export default Comment
