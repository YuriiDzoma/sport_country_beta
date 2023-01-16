import styles from './ProgramsListLinks.module.scss'
import {ProgramLink} from "./ProgramLink/ProgramLink";
import React from "react";
import {useAppSelector} from "hooks/redux";

const ProgramsListLinks = () => {
    const programs = useAppSelector(state => state.training.programs)
    return (
    <div>

        {programs.map((item, index) => (

            <ProgramLink key={index} to={'/training/training_programs/' + item.id}>
                <div className={styles.program}>
                    <span>{item.title}</span>
                </div>
            </ProgramLink>

        ))}
    </div>
)}


export default ProgramsListLinks;