import React from 'react'

import './HeaderSection.css'

const HeaderSection = props => {
    return(
        <div className='header'>
            <img src={props.thumbnail} alt={props.poster} className='thumbnail' />
        </div>
    )
}

export default HeaderSection