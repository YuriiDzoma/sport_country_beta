import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import CreateProgramForm from './ProgramCreate/CreateProgramForm';
import ProgramCreateButton from './ProgramCreateButton/ProgramCreateButton';
import ProgramExpand from './ProgramExpand/ProgramExpand';
import ProgramsListLinks from './ProgramList/ProgramsListLinks';
import styles from './TrainingPrograms.module.scss';
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";
import {fetchUserPrograms} from "store/actions";
import {Context} from "components/Context/Context";

const TrainingPrograms = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const {id} = useParams()
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUser);
  const userId = id

  let isMyProfile = false;
  if (user && user.id === id) {
      isMyProfile = true
  }
  if (user && id) {
      if (id !== user.id) {
          dispatch(fetchUserPrograms(id))
      }
  }
  const onProgramsListHide = (values: boolean) => {
  setShowPrograms(values);
  };

  return (
      <Context.Provider value={{
          isMyProfile,
          userId,
      }}>
          <div className={`${styles.trainProgramContainer} ${showPrograms ? styles.listShowed : ''}`}>
              <button className={styles.showProgramsList} onClick={() => onProgramsListHide(true)}>
                  <FormatListBulletedIcon />
              </button>
              <div className={styles.programsList}>
                  <ProgramCreateButton profileId={id} onProgramsListHide={onProgramsListHide} />
                  <ProgramsListLinks isMyProfile={isMyProfile} onProgramsListHide={onProgramsListHide} />
              </div>
              <div onClick={() => onProgramsListHide(false)} className={styles.programsListCover}></div>
              <div className={styles.programsContent}>
                  <Routes>
                      <Route path={'create/'} element={<CreateProgramForm />} />
                      <Route path={':id'} element={<ProgramExpand />} />
                      <Route path={`:id/redactor/`}  element={<CreateProgramForm isEditor />} />
                  </Routes>
              </div>
          </div>
    </Context.Provider>

  );
};

export default TrainingPrograms;
