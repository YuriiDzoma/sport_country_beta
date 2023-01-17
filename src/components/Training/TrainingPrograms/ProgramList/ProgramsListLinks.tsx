import styles from './ProgramsListLinks.module.scss'
import {ProgramLink} from "./ProgramLink/ProgramLink";
import React from "react";
import {useAppSelector} from "hooks/redux";
import Preloader from "components/Common/Preloader/Preloader";
import {getIsFetching, getPrograms} from "store/selectors";

const ProgramsListLinks = () => {
    const programs = useAppSelector(getPrograms);
    const isFetching = useAppSelector(getIsFetching);
    return (
    <div>
        {isFetching ? <Preloader /> : programs.map((item, index) => (
                <ProgramLink key={index} to={'/training/training_programs/' + item.id}>
                    <div className={styles.program}>
                        <span>{item.title}</span>
                    </div>
                </ProgramLink>
            ))}

    </div>
)}


export default ProgramsListLinks;