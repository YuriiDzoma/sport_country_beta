import DayExercise from "./DayExercise/DayExercise";
import {ProgramDayProps} from "./ProgramDay.types";
import React from "react";
import styles from './ProgramDay.module.scss';


const ProgramDay: React.FC<ProgramDayProps> = ({day}) => {
    return (
        <div className={styles.trainingContainer}>
            <div className={styles.programExercisesContainer}>
                <h3>Day {day.day}</h3>
                <div className={styles.exercises}>
                    {day.exercises.map((exercise) => <DayExercise key={exercise.id} exercise={exercise} />)}
                </div>
            </div>
            <div className={styles.weightHistory}>
                {day.workHistory.map((story, index) => (
                    <div key={index}>
                        <span className={styles.weightHistory_date}>{story.date}</span>
                        <div className={styles.weightHistory_weights}>
                            {story.weights.map((item, index) => (
                                <div key={index}>
                                    <p>{item.weight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.weightProcess}>
                <span className={styles.weightProcess_subtitle}>New training</span>
                <div className={styles.weightProcess_weights}>
                    {day.workProcess.weights.map((item, index) => (
                        <div key={index}>
                            <input className={styles.field}></input>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProgramDay