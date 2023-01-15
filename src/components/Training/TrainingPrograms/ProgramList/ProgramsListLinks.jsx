import styles from './ProgramsListLinks.module.scss'
import {ProgramLink} from "./ProgramLink/ProgramLink";
import React, {useEffect, useState} from "react";
import {ProgramsListLinksProps} from "./ProgramsListLinks.types";



const ProgramsListLinks = ({ programs, getProgram }) => {

    return (
    <div>

        {programs.map((item, index) => (

            <ProgramLink key={index} to={'/training/training_programs/' + item.id}>
                <div className={styles.program} onClick={() => {
                    getProgram(item)
                }}>
                    <span>{item.title}</span>
                </div>
            </ProgramLink>

        ))}
    </div>
)}


export default ProgramsListLinks;