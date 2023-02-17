import styles from './ProgramCreateButton.module.scss';
import {Link} from "react-router-dom";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import React from 'react';
import {ProgramsListLinksProps} from "./../ProgramList/ProgramsListLinks.types";

const ProgramCreateButton: React.FC<ProgramsListLinksProps> = ({onProgramsListHide}) => {
    return (
        <div className={styles.createProgram}>

          <Link onClick={() => onProgramsListHide(false)} className={styles.createProgram__link} to={'/training/training_programs/create/'}>
            <LibraryAddIcon />
            <span>add new program</span>
          </Link>
        </div>
    )
}

export default ProgramCreateButton;