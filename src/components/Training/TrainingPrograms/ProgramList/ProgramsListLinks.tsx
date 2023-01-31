import styles from './ProgramsListLinks.module.scss'
import {ProgramLink} from "./ProgramLink/ProgramLink";
import React, {useEffect} from "react";
import {useAppSelector} from "hooks/redux";
import Preloader from "components/Common/Preloader/Preloader";
import {getIsFetching, getPrograms} from "store/selectors";

const ProgramsListLinks = () => {
    const programs = useAppSelector(getPrograms);
    useEffect(() => {

    },[programs]);
    const isFetching = useAppSelector(getIsFetching);
    return (
    <div className={styles.programsList}>
        {isFetching ? <Preloader /> : programs.map((item, index) => (
                <ProgramLink key={index} to={'/training/training_programs/' + item.id}>
                    {item.title}
                </ProgramLink>
            ))}

    </div>
)}


export default ProgramsListLinks;