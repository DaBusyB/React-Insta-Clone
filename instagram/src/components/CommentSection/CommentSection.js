import React from 'react';

import './CommentSection.css'

const CommentSection = props => {
    // console.log(props.comments)
    return (
        <div className='commentSection'>
            <p className='username'>{props.username}</p>
            <p className='comment'>{props.comment}</p>
        </div>
    )
}

export default CommentSection;