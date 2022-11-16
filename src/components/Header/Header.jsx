import React from 'react';
import './Header.css';

import IMG1 from '../../assets/image2.png';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__header-presentation'> 
            <h1>Create your own training</h1>
            <p>Check out the most effective exercises</p> 
            <button className='custom__btn'> <a href='#exercises'>CLICK HERE</a></button>
        </div>
        <div className='app__header-img'>
            <img src={IMG1} alt='home'></img>
        </div>
      </div>
  )
}

export default Header