import React from 'react';
import Icon from '../../assets/icons/gym.png';
import './BodyPart.css';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div className='app__bodyPart section__padding'>
        <button className='app__bodyPart-card' type='button' onClick={() => {
      setBodyPart(item);
    }}>
        <img src={Icon} alt="dumbell" />
        <h1>{" "} {item}</h1>
    </button>
    </div>
  )
}

export default BodyPart