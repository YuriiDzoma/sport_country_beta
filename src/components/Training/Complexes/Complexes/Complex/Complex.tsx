import styles from "./Complex.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import {ComplexProps} from "./Complex.types";


const Complex: React.FC<ComplexProps> = ({program}) => {
    return (
        <div className={styles.program} key={program.id}>
            <div className={styles.program_type}>
                <span className={styles.program_title}>{program.title}</span>
            </div>
            <div>
                <span>{program.typeOf}</span>
            </div>
            <div>
                <button className={styles.program_add} ><AddCircleIcon color={'primary'} /></button>
            </div>
        </div>
    )
}

export default Complex;