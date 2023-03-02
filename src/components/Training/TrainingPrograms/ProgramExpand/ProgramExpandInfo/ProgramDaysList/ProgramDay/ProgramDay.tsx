import React, {useContext} from 'react';

import ExercisesList from 'components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/ExercisesList/ExercisesList';
import WorkProcess from 'components/Training/TrainingPrograms/ProgramExpand/ProgramExpandInfo/ProgramDaysList/ProgramDay/workProcess/workProcess';

import styles from './ProgramDay.module.scss';
import { ProgramDayProps } from './ProgramDay.types';
import WorkHistory from './workHistory/workHistory';
import {useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";
import {Context} from "components/Context/Context";

const ProgramDay: React.FC<ProgramDayProps> = ({ day }) => {
  const dayNumber = day.day;
    const user = useAppSelector(currentUser);
    const {isMyProfile}: any = useContext(Context)
    let isTrainer = false;
    if (user) {
        isTrainer = user.isTrainer
    }

  return (
    <div className={styles.trainingContainer}>
      <ExercisesList day={day} />
      <WorkHistory day={day} />
        {isTrainer || isMyProfile
            ? <WorkProcess dayNumber={dayNumber} />
            : null
        }
    </div>
  );
};

export default ProgramDay;
