import React from 'react'
import Pins from './Pins'
import './Pins_Container.css'
import {img_data} from '../../IMAGES/Images'

function PinsContainer() {
    return(
         <div className='pins__container'>
           {
              img_data.map((img)=>(
                <Pins key={img.id} src={img.src} auther={img.author}/>    
              ))
           }
    
         </div>
    )
}
export default PinsContainer;
