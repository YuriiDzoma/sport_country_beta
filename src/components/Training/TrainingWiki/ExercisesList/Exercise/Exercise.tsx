import React from 'react';

import styles from './Exercise.module.scss';
import { ExercisesProps } from './Exercise.types';
import {Link} from "react-router-dom";

const Exercise: React.FC<ExercisesProps> = ({ exercise: { imageStart, imageFinish, nameEn } }) => {
  return (
    <div className={styles.exerciseWrapper}>
      <div className={styles.exercise}>
        <div className={styles.exercise__image}>
          <img alt="start" src={imageStart} />
        </div>
        <div className={styles.exercise__image}>
          <img alt="finish" src={imageFinish} />
        </div>
        <Link className={styles.exercise__link} to={`/training/wiki/${nameEn.replace(/ /g,'')}`}>
          <h4 className={styles.exercise__link_name}>{nameEn}</h4>
        </Link>
      </div>
    </div>
  );
};

export default Exercise;
