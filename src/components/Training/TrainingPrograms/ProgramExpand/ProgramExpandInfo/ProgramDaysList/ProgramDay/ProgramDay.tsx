import {ProgramDayProps} from "./ProgramDay.types";
import React from "react";
import styles from './ProgramDay.module.scss';
import WorkHistory from './workHistory/workHistory';
import WorkProcess
    from "components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/workProcess/workProcess";
import ExercisesList
    from "components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/ExercisesList/ExercisesList";


const ProgramDay: React.FC<ProgramDayProps> = ({day}) => {
    return (
        <div className={styles.trainingContainer}>
            <ExercisesList day={day} />
            <WorkHistory day={day} />
            <WorkProcess day={day} />
        </div>
    )
}

export default ProgramDay