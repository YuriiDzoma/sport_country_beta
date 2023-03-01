import React from 'react';

import styles from '../ProgramExpandInfo.module.scss';
import ProgramDay from './ProgramDay/ProgramDay';
import { ProgramDaysListProps } from './ProgramDaysList.types';

const ProgramDaysList: React.FC<ProgramDaysListProps> = ({ itemDays }) => (
  <div className={styles.programDaysContainerInner}>
    {itemDays.map((day, index) => (
      <ProgramDay key={index} day={day} />
    ))}
  </div>
);

export default ProgramDaysList;
