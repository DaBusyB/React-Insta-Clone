import React from 'react';
import PropTypes from 'prop-types'

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

CommentSection.propTypes = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default CommentSection;