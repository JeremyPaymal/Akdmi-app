import React, {useState} from 'react';
import Header from '../components/Header/Header';
import SearchExercices from '../components/SearchExercises/SearchExercises';
import Exercises from '../components/Exercises/Exercises';


const Home = () => {

    const [bodyPart, setBodyPart] = useState(['all']);
     const [exercises, setExercises] = useState([]);

  return (
    <>
    <Header />
    <hr></hr>
    <SearchExercices 
    setExercises={setExercises} 
    bodyPart={bodyPart} 
    setBodyPart={setBodyPart}
    />
    <hr></hr>
    <Exercises 
    setExercises={setExercises} 
    bodyPart={bodyPart} 
    exercises={exercises}
    />
    </>
  )
}

export default Home