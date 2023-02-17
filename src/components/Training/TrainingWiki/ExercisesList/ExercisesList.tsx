import { useEffect } from 'react';

import { useAppSelector } from 'hooks/redux';
import { getExercises } from 'store/selectors';

import Exercise from './Exercise/Exercise';
import styles from './ExercisesList.module.scss';

const ExercisesList = () => {
  const exercises = useAppSelector(getExercises);
  useEffect(() => {
    console.log('effect');
  }, [exercises]);

  return (
    <div className={styles.exercisesListWrapper}>
      {exercises.map((exercise, index) => (
        <Exercise key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExercisesList;
