import React from 'react';

import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className='postContainer'>

            <img src={props.eaPost.imageUrl} alt={props.eaPost.username}/>
            
            
            {props.eaPost.comments.map(comment => 
               <CommentSection username={comment.username} comment={comment.text}/>
            )}
            
          
        </div>
    )
}

export default PostContainer;