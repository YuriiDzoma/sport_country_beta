import { Route, Routes } from 'react-router-dom';

import styles from './Training.module.scss';
import TrainingNavbar from './TrainingNavbar/TrainingNavbar';
import TrainingProcess from './TrainingProcess/TrainingProcess';
import TrainingPrograms from './TrainingPrograms/TrainingPrograms';
import WikiContainer from './TrainingWiki/WikiContainer';

const Training = () => {
  const trainingNavigation = [
    { id: 1, tittle: 'Training Process', url: '/training/training_process/' },
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
            <Route path={'training_process/'} element={<TrainingProcess />} />
            <Route path={'training_programs/*'} element={<TrainingPrograms />} />
            <Route path={'training_wiki/*'} element={<WikiContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Training;
