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
import {currentUser, getUserById} from "store/selectors";
import {fetchUserPrograms} from "store/actions";
import {Context} from "components/Context/Context";
import {getFavoriteProgram} from "api/api";
import {setUserFavoriteProgram, setUsersLoading} from "store/users-slice";
import UserInfo from "components/Common/UserInfo/UserInfo";

const TrainingPrograms = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const {id} = useParams()
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUser);

  const userId = id

  if (userId) {
      setUsersLoading(true);
      getFavoriteProgram(id).then(response => {dispatch(setUserFavoriteProgram(response))});
      setUsersLoading(false);
  }

  let isMyProfile = false;
  if (user && user.id === userId) {
      isMyProfile = true
  }
  if (user && userId) {
      if (userId !== user.id) {
          dispatch(fetchUserPrograms(userId))
      }
  }
  const onProgramsListHide = (values: boolean) => {
  setShowPrograms(values);
  };
  const profile = useAppSelector((state) => getUserById(state, id));

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
                  <UserInfo id={id} profile={profile} />
                  <ProgramCreateButton profileId={id} onProgramsListHide={onProgramsListHide}/>
                  <ProgramsListLinks isMyProfile={isMyProfile} onProgramsListHide={onProgramsListHide}/>
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
