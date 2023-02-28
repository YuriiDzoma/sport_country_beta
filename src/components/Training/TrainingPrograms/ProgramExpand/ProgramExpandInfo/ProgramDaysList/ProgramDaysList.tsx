import React from 'react';

import styles from '../ProgramExpandInfo.module.scss';
import ProgramDay from './ProgramDay/ProgramDay';
import { ProgramDaysListProps } from './ProgramDaysList.types';

const ProgramDaysList: React.FC<ProgramDaysListProps> = ({ clientId, isMyProfile, itemDays }) => (
  <div className={styles.programDaysContainerInner}>
    {itemDays.map((day, index) => (
      <ProgramDay clientId={clientId} isMyProfile={isMyProfile} key={index} day={day} />
    ))}
  </div>
);

export default ProgramDaysList;
