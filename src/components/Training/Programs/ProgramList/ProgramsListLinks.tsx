import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect } from 'react';

import Preloader from 'components/Common/Preloader/Preloader';
import { useAppSelector } from 'hooks/redux';
import {getIsFetching, getMyAllPrograms, getUserPrograms} from 'store/selectors';

import { ProgramLink } from './ProgramLink/ProgramLink';
import styles from './ProgramsListLinks.module.scss';
import { ProgramsListLinksProps } from './ProgramsListLinks.types';
import {useParams} from "react-router";


const ProgramsListLinks: React.FC<ProgramsListLinksProps> = ({ isMyProfile, onProgramsListHide }) => {

  let programs
  if (isMyProfile) {
    programs = useAppSelector(getMyAllPrograms);
  } else {
    programs = useAppSelector(getUserPrograms);
  }
  const {id} = useParams()
  useEffect(() => {
  }, [programs]);
  const isFetching = useAppSelector(getIsFetching);


  return (
    <div className={styles.programsList}>
      <button onClick={() => onProgramsListHide(false)} className={styles.programsListClose}>
        <CloseIcon />
      </button>

      {isFetching ? (
        <Preloader />
      ) : (
          programs.map((item, index) => (
          <ProgramLink
            onProgramsListHide={onProgramsListHide}
            key={index}
            to={`/training/training_programs/${id}/${item.id}`}
          >
            {item.title}
          </ProgramLink>
        ))
      )}
    </div>
  );
};

export default ProgramsListLinks;
