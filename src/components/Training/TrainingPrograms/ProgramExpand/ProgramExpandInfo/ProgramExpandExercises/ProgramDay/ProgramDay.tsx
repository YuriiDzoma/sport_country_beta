import DayExercise from "./DayExercise/DayExercise";
import {ProgramDayProps} from "./ProgramDay.types";
import React from "react";
import styles from '../../ProgramExpandInfo.module.scss';


const ProgramDay: React.FC<ProgramDayProps> = ({day}) => {
    return (
        <div  className={styles.programDayContainer}>
            <h3>Day {day.day}</h3>
            <div className={styles.exercises}>
              {day.exercises.map((exercise) => <DayExercise key={exercise.id} exercise={exercise} />)}
            </div>
        </div>
    )
}

export default ProgramDay