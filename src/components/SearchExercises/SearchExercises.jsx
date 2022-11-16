import React, { useEffect, useState} from 'react';
import './SearchExercices.css';

import { exerciseOptions, fetchData } from '../../utils/fetchData.js';
import HorizontalScrollbar from '../HorizontalScrollBar/HorizontalScrollBar';


const SearchExercices = ({ setExercises, bodyPart, setBodyPart }) => {
    const [ search, setSearch ] = useState("");
    const [ bodyParts, setBodyParts ] = useState([]);

    useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
  
        setBodyParts(["all", ...bodyPartsData]);
      };
  
      fetchExercisesData();
    }, []);
  
    const handleSearch = async () => {
      if (search) {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
  
        const searchedExercises = exercisesData.filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        setSearch("");
        setExercises(searchedExercises);
        }
      };

    return (
        <div className="section__padding" id='exercises'>
          <div className='app__search'>
        <h1>Enter the body part</h1>
        <p>Ex: back</p>  
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
        />
        <button type='submit' className="custom__btn" onClick={handleSearch}>
          SEARCH
        </button> </div>
        
        <div className='app__scrollbar'>
          <p>Or</p>
        <h1>Choose a category</h1>
        <HorizontalScrollbar 
           data={bodyParts}
           bodyParts
           setBodyPart={setBodyPart}
           bodyPart={bodyPart}
         />
        </div>
        
      </div>
    );
  };

export default SearchExercices;


