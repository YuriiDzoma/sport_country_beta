import styles from './ExercisesList.module.scss';
import DayExercise from './DayExercise/DayExercise';
import React from "react";
import { ProgramDayProps } from './../ProgramDay.types';

const ExercisesList: React.FC<ProgramDayProps> = ({day}) => {
    return (
        <div className={styles.programExercisesContainer}>
            <h3>Day {day.day}</h3>
            <div className={styles.exercises}>
                {day.exercises.map((exercise) => <DayExercise key={exercise.id} exercise={exercise} />)}
            </div>
        </div>
    )
}
export default ExercisesList;