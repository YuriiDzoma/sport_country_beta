import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './ProgramLink.module.scss';
import { ProgramLinkProps } from './ProgramLink.types';

const ProgramLink: React.FC<ProgramLinkProps> = ({ onProgramsListHide, children, to }) => {
  const location = useLocation();
  const activeLocation = location.pathname === to || location.pathname === to + '/redactor/';

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      onClick={() => onProgramsListHide(false)}
      to={to}
      className={`${styles.programLink} ${activeLocation ? styles.link_active : ''}`}
    >
      {children}
    </Link>
  );
};

export { ProgramLink };
