import React from "react";
import {ExercisesProps} from './Exercise.types';
import styles from './Exercise.module.scss';

const Exercise:React.FC<ExercisesProps> = ({exercise}) => {
    return (
        <div className={styles.exerciseWrapper}>
            <div className={styles.exerciseWrapper_exercise}>
              <div className={styles.exerciseWrapper__image}>
                <img alt='start' src={exercise.imageStart} />
              </div>
              <div className={styles.exerciseWrapper__image}>
                <img alt='finish' src={exercise.imageFinish} />
              </div>
              <p>{exercise.nameEn}</p>
            </div>

        </div>
    )
}

export default Exercise;