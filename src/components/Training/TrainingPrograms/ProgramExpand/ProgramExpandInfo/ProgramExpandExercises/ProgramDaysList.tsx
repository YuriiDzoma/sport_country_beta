import ProgramDay from "./ProgramDay/ProgramDay";
import React from "react";
import {ProgramDaysListProps} from "./ProgramDaysList.types";
import styles from '../ProgramExpandInfo.module.scss';

const ProgramDaysList: React.FC<ProgramDaysListProps> = ({itemDays}) => (
    <div className={styles.programDaysContainer}>
        <div className={styles.programDaysContainerInner}>
            {itemDays.map((day, index) => <ProgramDay key={index} day={day} /> )}
        </div>
    </div>
)

export default ProgramDaysList;