import React from 'react';

import './CommentSection.css'

const CommentSection = props => {
    // console.log(props.comments)
    return (
        <div className='commentSection'>
            <p>{props.username}</p><p>{props.comment}</p>
        </div>
    )
}

export default CommentSection;