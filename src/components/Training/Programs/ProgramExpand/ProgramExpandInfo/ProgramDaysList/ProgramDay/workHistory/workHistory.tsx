import React from 'react';

import styles from './workHistory.module.scss';
import { WorkHistoryProps } from './WorkHistory.types';

const WorkHistory: React.FC<WorkHistoryProps> = ({ day }) => {
  return (
    <div className={styles.weightHistory}>
      {day.workHistory.map((story, index) => (
        <div className={styles.weightHistory_storyBox} key={index}>
          <span className={styles.weightHistory_date}>{story.date}</span>
          <div className={styles.weightHistory_weights}>
            {story.weights.map((item, index) => (
              <div key={index}>
                <p className={styles.item__weight}>{item.weight}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
