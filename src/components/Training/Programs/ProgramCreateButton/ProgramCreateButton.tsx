import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import React from 'react';
import { Link } from 'react-router-dom';

import { ProgramsListLinksProps } from './../ProgramList/ProgramsListLinks.types';
import styles from './ProgramCreateButton.module.scss';

const ProgramCreateButton: React.FC<ProgramsListLinksProps> = ({ profileId, onProgramsListHide }) => {
  return (
    <div className={styles.createProgram}>
      <Link
        onClick={() => onProgramsListHide(false)}
        className={styles.createProgram__link}
        to={`/training/programs/${profileId}/create/`}
      >
        <LibraryAddIcon />
        <span>add new program</span>
      </Link>
    </div>
  );
};

export default ProgramCreateButton;
