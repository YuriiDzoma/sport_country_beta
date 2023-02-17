import React from 'react';

import ExercisesList from 'components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/ExercisesList/ExercisesList';
import WorkProcess from 'components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/workProcess/workProcess';

import styles from './ProgramDay.module.scss';
import { ProgramDayProps } from './ProgramDay.types';
import WorkHistory from './workHistory/workHistory';

const ProgramDay: React.FC<ProgramDayProps> = ({ day }) => {
  const dayNumber = day.day;
  return (
    <div className={styles.trainingContainer}>
      <ExercisesList day={day} />
      <WorkHistory day={day} />
      <WorkProcess dayNumber={dayNumber} />
    </div>
  );
};

export default ProgramDay;
