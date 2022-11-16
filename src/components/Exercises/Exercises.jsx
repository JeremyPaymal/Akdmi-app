import React, { useEffect, useState } from 'react';
import './Exercises.css';

import { exerciseOptions, fetchData } from '../../utils/fetchData';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from "@material-ui/core/styles";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);
  
    useEffect(() => {
      const fetchExercisesData = async () => {
        let exercisesData = [];
  
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
  
        setExercises(exercisesData);
      };
  
      fetchExercisesData();
    }, [bodyPart]);

  
    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
    const paginate = (event, value) => {
      setCurrentPage(value);
  
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    const useStyles = makeStyles(() => ({
      ul: {
        "& .MuiPaginationItem-root": {
          color: "#fff"
        }
      }
    }));

    const classes = useStyles();


  return (
    <div  className='section__padding'>
        <article className='app__exercises-article'>
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
        </article>
        <div className='app__exercises-pagination'>
        {exercises.length > 6 && (
          <Pagination
            classes={{ul: classes.ul}}
            boundaryCount='4'
            color='standard'
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="small"
          />
        )}   
        </div>
        
    </div>
  )
}

export default Exercises