import { Route, Routes } from 'react-router-dom';

import styles from './Training.module.scss';
import TrainingNavbar from './TrainingNavbar/TrainingNavbar';
import Complexes from './Complexes/Complexes';
import TrainingPrograms from './TrainingPrograms/TrainingPrograms';
import WikiContainer from './TrainingWiki/WikiContainer';
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser, getPrograms} from "store/selectors";
import {setMyPrograms} from "store/actions";
import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "store/store";

const Training = () => {
  const user = useAppSelector(currentUser);

  const dispatch = useAppDispatch();
  if (user) {
    dispatch(setMyPrograms(user));
  }

  const allPrograms = useAppSelector(getPrograms)
  const trainingNavigation = [
    { id: 1, tittle: 'Complexes', url: '/training/complexes/' },
    { id: 2, tittle: 'Training Programs', url: '/training/training_programs/' },
    { id: 3, tittle: 'Training Wiki', url: '/training/training_wiki/' },
  ];

  return (
    <div className={styles.trainingWrapper}>
      <div className={styles.linksContainer}>
        <TrainingNavbar trainingNavigation={trainingNavigation} />
      </div>
      <div className={styles.trainingContentWrapper}>
        <div className={styles.trainingContent}>
          <Routes>
            <Route path={'Complexes/'} element={ allPrograms && allPrograms.length>=1
                ? <Complexes allPrograms={allPrograms} />
                : <>Sorry, programs are not available at the moment</>} />
            <Route path={'training_programs/*'} element={<TrainingPrograms />} />
            <Route path={'training_wiki/*'} element={<WikiContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Training;
