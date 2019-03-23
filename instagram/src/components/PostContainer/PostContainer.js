import React from 'react';

import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
import Icons from '../CommentSection/Icons'
import CommentInput from '../CommentSection/CommentInput'

const PostContainer = props => {
    return (
        <div className='postContainer'>

            <img src={props.eaPost.imageUrl} alt={props.eaPost.username} className='postImage'/>
            
            <Icons />

            {props.eaPost.comments.map(comment => 
               <CommentSection username={comment.username} comment={comment.text}/>
            )}

            <hr className='hr'/>
            
            <CommentInput />
          
        </div>
    )
}

export default PostContainer;