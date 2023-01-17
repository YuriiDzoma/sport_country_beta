import styles from './ProgramsListLinks.module.scss'
import {ProgramLink} from "./ProgramLink/ProgramLink";
import React from "react";
import {useAppSelector} from "hooks/redux";
import Preloader from "components/Common/Preloader/Preloader";
import {getPrograms} from "store/selectors";

const ProgramsListLinks = () => {
    const programs = useAppSelector(state => getPrograms(state))
    const isFetching = useAppSelector(state => state.training.isLoading)
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