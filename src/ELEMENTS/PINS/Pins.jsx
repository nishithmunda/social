import React from 'react'
import './Pins.css'

function Pins({src,author}){
    return(
        <div className='pin'>
            <img src={src} alt={author}></img>
        </div>
    )
}


export default Pins