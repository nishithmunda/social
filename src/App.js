import React from 'react'
import './App.css';
import Menu from './ELEMENTS/SIDEMENU/Menu';
import Button from './ELEMENTS/BUTTON/Button'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import { mdiPlusCircleOutline } from '@mdi/js';
import Icon from '@mdi/react'
import PinsContainer from './ELEMENTS/PINS/Pins_Container';

function App() {
  return (
    <div className="app">
        <Menu/>
        <div className='app__body'>
             <div className='app__body__header'>
               <div className="app__body__header__top">
                  <h1>Motivation</h1> 
                 <div className='avatar'>
                  <AvatarGroup max={4}>
                     <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/a7/bf/69/a7bf695997240f0a1fb62ad22a8d3f8a.png" />
                     <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIAg4c_725MB5gy35hwxz8xL-VOMbMWCWPtieJgW_rKGYGgm9-AZstMut637NqO52h64&usqp=CAU" />
                     <Avatar alt="Cindy Baker" src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png" />
                     <Avatar alt="Agnes Walker" src="https://gocartoonme.com/wp-content/uploads/cartoon-avatar.png" />
                  </AvatarGroup>

                  <Icon path={mdiPlusCircleOutline}
                      size={1.5}
                      rotate={0}
                      onClick={()=>console.log('Clicked')}
                      className='add_botton_avatar'
                  />
                  </div>
               </div>

               <ul className='header__list'>
                <li>All</li>
                <li>Articles</li>
                <li>Postcard</li>
                <li>Video</li>
                <li>Downloads</li>
                <li><Button type='button__type__1' onClick={()=>console.log('PLAY ALL')}>Play All</Button></li>
               </ul>
             </div>
             <div className='app__body__content'>
                  <PinsContainer/>
             </div>
        </div>
    </div>
  );
}

export default App;
