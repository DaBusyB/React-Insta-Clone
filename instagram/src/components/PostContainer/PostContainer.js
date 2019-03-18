import React from 'react';

import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className='postContainer'>

            <img src={props.eaPost.imageUrl} alt={props.eaPost.username}/>
            
            <CommentSection />
        </div>
    )
}

export default PostContainer;