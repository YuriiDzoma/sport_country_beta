import { Route, Routes } from 'react-router-dom';

import styles from './Training.module.scss';
import TrainingNavbar from './TrainingNavbar/TrainingNavbar';
import Complexes from './Complexes/Complexes';
import Programs from './Programs/Programs';
import WikiContainer from './TrainingWiki/WikiContainer';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getPrograms} from "store/selectors";
import {setMyPrograms} from "store/actions";
import CreateProgramForm from "components/Training/Programs/ProgramCreate/CreateProgramForm";
import React from "react";
import ExerciseDetail from "./TrainingWiki/ExercisesList/Exercise/ExerciseDetail/ExerciseDetail";

const Training = () => {
  const user = useAppSelector(currentUser);

  const dispatch = useAppDispatch();
  if (user) {
    dispatch(setMyPrograms(user.id));
  }

  const allPrograms = useAppSelector(getPrograms)

  return (
      <>
        {user && (
            <div className={styles.trainingWrapper}>
              <div className={styles.linksContainer}>
                <TrainingNavbar user={user} />
              </div>
              <div className={styles.trainingContentWrapper}>
                <div className={styles.trainingContent}>
                  <Routes>
                    <Route path={'Complexes/*'} element={ allPrograms && allPrograms.length>=1
                        ? <Complexes allPrograms={allPrograms} />
                        : <>Sorry, programs are not available at the moment</>} />
                    <Route path={'programs/:id/*'} element={<Programs />} />
                    <Route path={'global_create/'} element={<CreateProgramForm toGlobal />} />
                    <Route path={'wiki/*'} element={<WikiContainer />} />
                    <Route path={'wiki/:nameEn/*'} element={<ExerciseDetail />} />
                  </Routes>
                </div>
              </div>
            </div>
        )}
      </>
  );
};

export default Training;
