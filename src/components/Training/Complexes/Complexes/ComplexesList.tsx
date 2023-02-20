import styles from './CompleesList.module.scss'
import React from "react";
import {ComplexesListProps} from "./ComplexesList.types";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ComplexesList: React.FC<ComplexesListProps> = ({programs}) => {

    return (
        <>
            {programs && (
                programs.map((program) =>
                    <div className={styles.program} key={program.id}>
                        <div>
                            <span className={styles.program_title}>{program.title}</span>
                        </div>
                        <div>
                            <button className={styles.program_add} ><AddCircleIcon color={'primary'} /></button>
                        </div>
                    </div>
                )
            )}
        </>
    )
}

export default ComplexesList;