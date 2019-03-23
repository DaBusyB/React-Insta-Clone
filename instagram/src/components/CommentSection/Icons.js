import React, {Component} from 'react'

import './CommentSection.css'
import Unlike1 from '../../assets/Unlike1.png'
import Comment from '../../assets/Comment.png'
import Share from '../../assets/Share.png'
import Bookmark from '../../assets/Bookmark.png'

class Icons extends Component {
    render() {
        return (

            <div className='icons'>
                <div className='container'>
                    <img src={Unlike1} alt='unlike' className='postIcon'/>
                </div>                 
                
                <div className='container'>
                    <img src={Comment} alt='comment' className='postIcon'/> 
                </div>

                <div className='container'>
                    <img src={Share} alt='share' className='postIcon'/> 
                </div>

                <div className='container bookmark'>
                    <img src={Bookmark} alt='bookmark' className='postIcon'/> 
                </div> 
            </div>
        )
    }
    
}

export default Icons