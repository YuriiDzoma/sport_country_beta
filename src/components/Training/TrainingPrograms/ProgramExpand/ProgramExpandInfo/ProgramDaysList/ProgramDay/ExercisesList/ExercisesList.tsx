import React from 'react';

import DayExercise from './DayExercise/DayExercise';
import styles from './ExercisesList.module.scss';
import { ExercisesListProps } from './ExercisesList.types';

const ExercisesList: React.FC<ExercisesListProps> = ({ day }) => {
  return (
    <div className={styles.programExercisesContainer}>
      <h3>Day {day.day}</h3>
      <div className={styles.exercises}>
        {day.exercises.map((exercise) => (
          <DayExercise key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};
export default ExercisesList;
