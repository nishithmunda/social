import React from 'react'
import './Menu.css'

import Icon from '@mdi/react'
import { mdiRocketLaunch } from '@mdi/js';
import Button from '../BUTTON/Button';

function Menu(){
   return(
    <div className='app__menu'>
    <div className='logo'>
      B
    </div>
    <div className='app__menu__top'>
     <ul className='menu__list'>
       <li>Motivation</li>
       <li>Productivity</li>
       <li>Design</li>
       <li>Study</li>
     </ul>
     <Button type='button__type__1'onClick={()=>console.log('NEW POST')}>New Posts</Button>

     </div>
     <div className='pro__account__card'>
        <div className='pro__account__card__top'>
           <Icon path={mdiRocketLaunch}
              size={1.5}
              rotate={0}
              color='#f46f9e'

           />
          <h5>
            Pro account is more powerful,Get 30% off
          </h5>
        </div> 
        <div className='button__container'>
           <Button type='button__type__2'onClick={()=>console.log('GET')}>GET</Button>
        </div>
     </div>
     <div className='app__menu__bottom'>
       <Button type='button__type__3'onClick={()=>console.log('LOGOUT')}>Logout</Button>
     </div>

 </div>
   )
}

export default Menu;