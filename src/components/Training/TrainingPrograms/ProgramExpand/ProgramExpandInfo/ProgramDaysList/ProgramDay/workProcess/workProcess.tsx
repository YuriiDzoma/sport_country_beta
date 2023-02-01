import styles from './workProcess.module.scss';
import React from "react";
import { ProgramDayProps } from './../ProgramDay.types';

const WorkProcess: React.FC<ProgramDayProps> = ({day}) => {
    return (
        <div className={styles.weightProcess}>
            <div className={styles.weightProcess_date}>
                <label htmlFor="date">New </label>
                <input id='date' name='date' placeholder='date' />
            </div>
            <div className={styles.weightProcess_weights}>
                {day.workProcess.weights.map((item, index) => (
                    <div key={index}>
                        <input className={styles.field}></input>
                    </div>
                ))}
                <div className={styles.completeTrain}>
                    <button>Complete</button>
                </div>
            </div>

        </div>
    )
}

export default WorkProcess;