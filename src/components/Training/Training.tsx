import { Route, Routes } from 'react-router-dom';

import styles from './Training.module.scss';
import TrainingNavbar from './TrainingNavbar/TrainingNavbar';
import Complexes from './Complexes/Complexes';
import TrainingPrograms from './TrainingPrograms/TrainingPrograms';
import WikiContainer from './TrainingWiki/WikiContainer';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getPrograms} from "store/selectors";
import {setMyPrograms} from "store/actions";
import CreateProgramForm from "components/Training/TrainingPrograms/ProgramCreate/CreateProgramForm";
import React from "react";

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
                    <Route path={'training_programs/:id/*'} element={<TrainingPrograms />} />
                    <Route path={'global_create/'} element={<CreateProgramForm toGlobal />} />
                    <Route path={'training_wiki/*'} element={<WikiContainer />} />
                  </Routes>
                </div>
              </div>
            </div>
        )}
      </>

  );
};

export default Training;
