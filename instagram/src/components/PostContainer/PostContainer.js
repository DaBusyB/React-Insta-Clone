import React from 'react';

import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = () => {
    return (
        <div className='postContainer'>
            <h1>PostContainer</h1>
            <CommentSection />
        </div>
    )
}

export default PostContainer;