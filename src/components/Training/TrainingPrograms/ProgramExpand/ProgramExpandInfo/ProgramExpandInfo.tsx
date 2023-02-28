import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import ProgramDaysList from './ProgramDaysList/ProgramDaysList';
import styles from './ProgramExpandInfo.module.scss';
import { ProgramExpandInfoProps } from './ProgramExpandInfo.types';
import ProgramRemove from './ProgramRemove/ProgramRemove';
const ProgramExpandInfo: React.FC<ProgramExpandInfoProps> = ({ program }) => {
    let level;
    switch (program.level) {
        case '1' :
            level = 'Beginner'
            break;
        case '2':
            level = 'Intermediate'
            break;
        case '3':
            level = 'Advanced'
            break;
        case '4':
            level = 'Expert'
            break;
        case '5':
            level = 'Professional'
            break;
        default:
            level = 'Beginner'
    }
  return (
    <div className={styles.programExpandContainer}>
      <div className={styles.programExpand}>
        <h2>{program.title}</h2>
      </div>

      <div className={styles.programExpand}>
        <div className={styles.programExpand__type}>
          <p className={styles.label}>type:
            <span className={styles.label__item}>{program.typeOf}</span>
          </p>
        </div>
        <div className={styles.programExpand__author}>
          <p className={styles.label}>author:
            <span className={styles.label__item}>{program.author}</span>
          </p>
        </div>
        <div className={styles.programExpand__author}>
            <p className={styles.label}>level:
                <span className={styles.label__item}>{level}</span>
            </p>
        </div>
      </div>

      <ProgramDaysList itemDays={program.days} />

      <div className={styles.redactor}>
        <Link to={`/training/training_programs/${program.id}/redactor/`}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>
      </div>

      <ProgramRemove />
    </div>
  );
};

export default ProgramExpandInfo;
