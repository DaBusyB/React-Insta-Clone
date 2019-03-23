import React from 'react';

import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
import Icons from '../CommentSection/Icons'

const PostContainer = props => {
    return (
        <div className='postContainer'>

            <img src={props.eaPost.imageUrl} alt={props.eaPost.username} className='postImage'/>
            
            {/* <hr className='hr'/> */}
            
            <Icons />

            {props.eaPost.comments.map(comment => 
               <CommentSection username={comment.username} comment={comment.text}/>
            )}
            
          
        </div>
    )
}

export default PostContainer;