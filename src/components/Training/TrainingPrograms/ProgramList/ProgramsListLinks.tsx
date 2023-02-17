import styles from './ProgramsListLinks.module.scss'
import {ProgramLink} from "./ProgramLink/ProgramLink";
import React, {useEffect} from "react";
import {useAppSelector} from "hooks/redux";
import Preloader from "components/Common/Preloader/Preloader";
import {getIsFetching, getPrograms} from "store/selectors";
import CloseIcon from '@mui/icons-material/Close';
import {ProgramsListLinksProps} from "./ProgramsListLinks.types";


const ProgramsListLinks: React.FC<ProgramsListLinksProps> = ({onProgramsListHide}) => {
    const programs = useAppSelector(getPrograms);
    useEffect(() => {},[programs]);
    const isFetching = useAppSelector(getIsFetching);

    return (
    <div className={styles.programsList}>
        <button onClick={() => onProgramsListHide(false)} className={styles.programsListClose}>
            <CloseIcon />
        </button>

        {isFetching ? <Preloader /> : programs.map((item, index) => (
                <ProgramLink onProgramsListHide={onProgramsListHide}
                             key={index} to={'/training/training_programs/' + item.id} >
                    {item.title}
                </ProgramLink>
            ))}

    </div>
)}


export default ProgramsListLinks;