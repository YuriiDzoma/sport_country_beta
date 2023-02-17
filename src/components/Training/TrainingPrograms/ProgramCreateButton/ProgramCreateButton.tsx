import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import React from 'react';
import { Link } from 'react-router-dom';

import { ProgramsListLinksProps } from './../ProgramList/ProgramsListLinks.types';
import styles from './ProgramCreateButton.module.scss';

const ProgramCreateButton: React.FC<ProgramsListLinksProps> = ({ onProgramsListHide }) => {
  return (
    <div className={styles.createProgram}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        onClick={() => onProgramsListHide(false)}
        className={styles.createProgram__link}
        to={'/training/training_programs/create/'}
      >
        <LibraryAddIcon />
        <span>add new program</span>
      </Link>
    </div>
  );
};

export default ProgramCreateButton;
