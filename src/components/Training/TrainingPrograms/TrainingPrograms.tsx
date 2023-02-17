import styles from './TrainingPrograms.module.scss'
import ProgramsListLinks from "./ProgramList/ProgramsListLinks";
import {Route, Routes} from "react-router-dom";
import ProgramCreateButton from "./ProgramCreateButton/ProgramCreateButton";
import React, {useState} from "react";
import ProgramExpand from "./ProgramExpand/ProgramExpand";
import CreateProgramForm from "./ProgramCreate/CreateProgramForm";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const TrainingPrograms = () => {
    const [showPrograms, setShowPrograms] = useState(false);

    const onProgramsListHide = (values: boolean) => {
      setShowPrograms(values);
    }

    return (
        <div className={`${styles.trainProgramContainer} ${showPrograms ? styles.listShowed : ''}`}>
            <button className={styles.showProgramsList} onClick={() => onProgramsListHide(true)}>
              <FormatListBulletedIcon />
            </button>
            <div className={styles.programsList}>
              <ProgramCreateButton onProgramsListHide={onProgramsListHide} />
              <ProgramsListLinks onProgramsListHide={onProgramsListHide} />
            </div>
          <div onClick={() => onProgramsListHide(false)} className={styles.programsListCover}></div>
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