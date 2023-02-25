import styles from "./Complex.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import {ComplexProps} from "./Complex.types";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {addProgramToProfile} from "api/api";
import {currentUser} from "store/selectors";
import {addProgramToState} from "store/profile-slice";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
            <div className={styles.programInfo}>
                <div className={styles.programInfo_name}>
                    <span className={styles.programInfo_title}>{program.title}</span>
                </div>
                <div>
                    <span>{program.typeOf}</span>
                </div>
                <div>
                    <button onClick={() => onSubmit()} className={styles.programInfo_add} ><AddCircleIcon color={'primary'} /></button>
                </div>
            </div>
            <button className={styles.program__expand}>
                <ExpandMoreIcon color={'primary'} fontSize={'small'} />
                <span>show exercises</span>
                <ExpandMoreIcon color={'primary'} fontSize={'small'} />
            </button>
        </div>
    )
}

export default Complex;