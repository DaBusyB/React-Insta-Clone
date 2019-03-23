import React from 'react';

import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
import Icons from '../CommentSection/Icons'
import CommentInput from '../CommentSection/CommentInput'
import Likes from '../CommentSection/Likes'
import HeaderSection from '../HeaderSection/HeaderSection'

const PostContainer = props => {
    return (
        <div className='postContainer'>
            <HeaderSection thumbnail={props.eaPost.thumbnail} poster={props.username} />

            <img src={props.eaPost.imageUrl} alt={props.eaPost.username} className='postImage'/>
            
            <Icons />

            <Likes likes={props.eaPost.likes}/>

            {props.eaPost.comments.map(comment => 
               <CommentSection username={comment.username} comment={comment.text} key={props.eaPost.timestamp + '1'}/>
            )}

            <hr className='hr'/>
            
            <CommentInput />
          
        </div>
    )
}

export default PostContainer;