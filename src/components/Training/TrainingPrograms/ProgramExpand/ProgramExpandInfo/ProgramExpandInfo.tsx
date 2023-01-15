import styles from './ProgramExpandInfo.module.scss';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import ProgramDaysList from "./ProgramExpandExercises/ProgramDaysList";
import {ProgramExpandInfoProps} from "./ProgramExpandInfo.types";
import React from "react";

const ProgramExpandInfo:React.FC<ProgramExpandInfoProps> = ({item}) => (

    <div className={styles.programExpandContainer}>
        <div className={styles.programExpand}>
            <h2>{item.title}</h2>
        </div>

        <div className={styles.programExpand}>
            <div className={styles.programExpand_type}>
                <span>Type:</span>
                <span>{item.typeOf}</span>
            </div>
        </div>

        <ProgramDaysList itemDays={item.days}/>

        <div className={styles.redactor}>
            <Link to={`/training/training_programs/${item.id}/redactor/`}>
                <FontAwesomeIcon icon={faPenToSquare}/>
            </Link>
        </div>
    </div>
)


export default ProgramExpandInfo