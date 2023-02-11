import React from "react";
import {ExercisesProps} from './Exercise.types';
import styles from './Exercise.module.scss';

const Exercise:React.FC<ExercisesProps> = ({exercise}) => {
    return (
        <div className={styles.exerciseWrapper}>
            <div className={styles.exerciseWrapper_exercise}>
                <img alt='start' src={exercise.imageStart} />
                <img alt='finish' src={exercise.imageFinish} />
                <span>{exercise.nameEn}</span>
            </div>

        </div>
    )
}

export default Exercise;