import React from 'react';

import styles from './Exercise.module.scss';
import { ExercisesProps } from './Exercise.types';

const Exercise: React.FC<ExercisesProps> = ({ exercise: { imageStart, imageFinish, nameEn } }) => {
  return (
    <div className={styles.exerciseWrapper}>
      <div className={styles.exerciseWrapper_exercise}>
        <div className={styles.exerciseWrapper__image}>
          <img alt="start" src={imageStart} />
        </div>
        <div className={styles.exerciseWrapper__image}>
          <img alt="finish" src={imageFinish} />
        </div>
        <h4>{nameEn}</h4>
      </div>
    </div>
  );
};

export default Exercise;
