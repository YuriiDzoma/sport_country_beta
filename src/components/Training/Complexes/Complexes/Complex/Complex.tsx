import styles from "./Complex.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import {ComplexProps} from "./Complex.types";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {addProgramToProfile} from "api/api";
import {currentUser} from "store/selectors";
import {addProgramToState} from "store/profile-slice";


const Complex: React.FC<ComplexProps> = ({program}) => {
    const user = useAppSelector(currentUser);
    const dispatch = useAppDispatch();

    const onSubmit = () => {
        if (program && user) {
            addProgramToProfile(user.id, program);
            dispatch(addProgramToState(program))
        }
    }
    return (
        <div className={styles.program}>
            <div className={styles.program_type}>
                <span className={styles.program_title}>{program.title}</span>
            </div>
            <div>
                <span>{program.typeOf}</span>
            </div>
            <div>
                <button onClick={() => onSubmit()} className={styles.program_add} ><AddCircleIcon color={'primary'} /></button>
            </div>
        </div>
    )
}

export default Complex;