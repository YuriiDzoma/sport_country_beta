import styles from './TrainingPrograms.module.scss'
import ProgramsListLinks from "./ProgramList/ProgramsListLinks";
import {Route, Routes} from "react-router-dom";
import ProgramCreateButton from "./ProgramCreateButton/ProgramCreateButton";
import React, {useState} from "react";
import ProgramExpand from "./ProgramExpand/ProgramExpand";
import CreateProgramForm from "./ProgramCreate/CreateProgramForm";

const TrainingPrograms = () => {
    const [showPrograms, setShowPrograms] = useState(false);
    const onProgramsListShow = () => {
      setShowPrograms(true);
    }

    const onProgramsListHide = (values: boolean) => {
      setShowPrograms(values);
    }

    return (

        <div className={`${styles.trainProgramContainer} ${showPrograms ? styles.listShowed : ''}`}>
            <button className={styles.showProgramsList} onClick={() => onProgramsListShow()}>
              <span></span>
            </button>
            <div className={styles.programsList}>

                <ProgramCreateButton />
                <ProgramsListLinks onProgramsListHide={onProgramsListHide} />

            </div>
            <div className={styles.programsContent}>

                <Routes>
                    <Route path={'create/'} element={<CreateProgramForm />}/>

                    <Route path={":id"} element={<ProgramExpand />}/>

                    <Route path={`:id/redactor/`} element={<CreateProgramForm isEditor />}/>
                </Routes>

            </div>
        </div>
    )
}

export default TrainingPrograms;