import styles from './DayExercisesList.module.scss'
import React from "react";
import {DayExercisesListProps} from "./DayExercisesList.types";


const DayExercisesList: React.FC<DayExercisesListProps> = ({exercises}) => {

    return (
        <ul className={styles.exercisesList}>
            {exercises.map((exercise) => <li className={styles.exercise} key={exercise.id}>{exercise.name}</li>)}
        </ul>
    )
}

export default DayExercisesList;