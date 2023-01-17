import styles from './TrainingPrograms.module.scss'
import ProgramsListLinks from "./ProgramList/ProgramsListLinks";
import {Route, Routes} from "react-router-dom";
import ProgramCreateButton from "./ProgramCreateButton/ProgramCreateButton";
import React, {useEffect} from "react";
import ProgramExpand from "./ProgramExpand/ProgramExpand";
import CreateProgramForm from "./ProgramCreate/CreateProgramForm";
import {fetchPrograms} from 'store/ActionCreators';
import {useAppDispatch} from "hooks/redux";

const TrainingPrograms = () => {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchPrograms())
    }, [])

    return (

        <div className={styles.trainProgramContainer}>
            <div className={styles.programsList}>

                <ProgramCreateButton />
                <ProgramsListLinks />

            </div>
            <div className={styles.programsContent}>

                <Routes>
                    <Route path={'create/'} element={<CreateProgramForm
                        isEditor={false} />}/>

                    <Route path={":id"} element={<ProgramExpand />}/>

                    <Route path={`:id/redactor/`} element={<CreateProgramForm
                        isEditor={true} />}/>
                </Routes>

            </div>
        </div>
    )
}

export default TrainingPrograms;