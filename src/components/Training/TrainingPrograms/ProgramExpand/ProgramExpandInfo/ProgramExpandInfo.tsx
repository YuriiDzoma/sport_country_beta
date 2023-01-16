import styles from './ProgramExpandInfo.module.scss';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import ProgramDaysList from "./ProgramExpandExercises/ProgramDaysList";
import {ProgramExpandInfoProps} from "./ProgramExpandInfo.types";
import React from "react";

const ProgramExpandInfo:React.FC<ProgramExpandInfoProps> = ({program}) => (

    <div className={styles.programExpandContainer}>
        <div className={styles.programExpand}>
            <h2>{program.title}</h2>
        </div>

        <div className={styles.programExpand}>
            <div className={styles.programExpand_type}>
                <span>Type:</span>
                <span>{program.typeOf}</span>
            </div>
        </div>

        <ProgramDaysList itemDays={program.days}/>

        <div className={styles.redactor}>
            <Link to={`/training/training_programs/${program.id}/redactor/`}>
                <FontAwesomeIcon icon={faPenToSquare}/>
            </Link>
        </div>
    </div>
)


export default ProgramExpandInfo