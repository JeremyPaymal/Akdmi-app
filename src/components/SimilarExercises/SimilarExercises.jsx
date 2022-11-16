import React from 'react'
import './SimilarExercises.css';
import HorizontalScrollbarExercises from '../HorizontalScrollBarExercises/HorizontalScrollBarExercises';
import Loader from '../Loader/Loader';


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className='app__similarexercises'>
    <div className='app__similarexercises-content'>
        <hr ></hr>
        <h1>Similar target muscle exercises</h1>
    <article> {targetMuscleExercises.length !== 0 ? (<HorizontalScrollbarExercises data={targetMuscleExercises}/>): (<Loader />)}  </article>
    </div>
    <div className='app__similarexercises-content'>
      <h1>Similar equipment exercises</h1>
    <article> {targetMuscleExercises.length !== 0 ? (<HorizontalScrollbarExercises data={equipmentExercises} />): (<Loader />)} </article>
    </div>  
    </div>
  )
}

export default SimilarExercises;