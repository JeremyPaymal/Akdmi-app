import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { exerciseOptions, fetchData } from '../utils/fetchData';

import Detail from '../components/Detail/Detail';
import SimilarExercises from '../components/SimilarExercises/SimilarExercises';



const ExerciceDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0,0);
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
  
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);

    };
    fetchExercisesData();
  }, [id]);


  return (
    <>
    <Detail exerciseDetail={exerciseDetail} />
    <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </>
  )
}

export default ExerciceDetail