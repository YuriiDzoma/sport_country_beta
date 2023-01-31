import styles from './ProgramExpandInfo.module.scss';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import ProgramDaysList from "./ProgramDaysList/ProgramDaysList";
import {ProgramExpandInfoProps} from "./ProgramExpandInfo.types";
import React from "react";
import ProgramRemove
    from "components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramRemove/ProgramRemove";

const ProgramExpandInfo:React.FC<ProgramExpandInfoProps> = ({program}) => {

    return (

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

            <ProgramRemove />
        </div>
    )
};


export default ProgramExpandInfo