import React from 'react';
import "./Detail.css";


const Detail = ({ exerciseDetail }) => {
    const { gifUrl, name, target } = exerciseDetail;
  

  return (
    <div className='app__detail'>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <div className='app__detail-content'>
            <h1>{name}</h1>
            <button className='app__exercise-btn1'>{exerciseDetail.bodyPart}</button>
            <button className='app__exercise-btn2'>{exerciseDetail.target}</button>
            <p>Exercises keep you strong. {name} {` `} is one of the best exercises
          to target you {target}. <br></br>It will help you improve your mood and gain
          ernergy.</p>
        </div>
    </div>
  )
}

export default Detail