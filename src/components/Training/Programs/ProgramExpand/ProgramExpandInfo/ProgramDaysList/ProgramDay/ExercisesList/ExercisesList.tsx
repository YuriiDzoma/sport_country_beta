import React from 'react';

import DayExercise from './DayExercise/DayExercise';
import styles from './ExercisesList.module.scss';
import { ExercisesListProps } from './ExercisesList.types';

const ExercisesList: React.FC<ExercisesListProps> = ({ day, type }) => {
  return (
    <div className={ type === 'crossfit' ? styles.programExercisesCrossfit : styles.programExercisesContainer}>
      <h3 className={styles.dayNumber}> {type === 'crossfit' ? 'Complex' : `Day ${day.day}`}</h3>
      <div className={styles.exercises}>
        {day.exercises.map((exercise) => (
          <DayExercise key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};
export default ExercisesList;
