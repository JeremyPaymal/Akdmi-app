import React from 'react';
import { Link } from 'react-router-dom';

import './ExerciseCard.css';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='app__exerciseCard' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} />
        <div className='app__exerciseCard-btn'>
            <button className='app__exercise-btn1'>
                {exercise.bodyPart}
            </button>
            <button className='app__exercise-btn2'>
                {exercise.target}
            </button>
        </div>
        <h1>{exercise.name}</h1>
    </Link>
  )
}

export default ExerciseCard