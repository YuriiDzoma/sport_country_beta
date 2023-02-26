import styles from "./Complex.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, {useState} from "react";
import {ComplexProps} from "./Complex.types";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {addProgramToProfile} from "api/api";
import {currentUser} from "store/selectors";
import {addProgramToState} from "store/profile-slice";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DayList from "components/Training/Complexes/DaysList/DayList";


const Complex: React.FC<ComplexProps> = ({program}) => {
    const user = useAppSelector(currentUser);
    const dispatch = useAppDispatch();
    const [showMore, setShowMore] = useState(false)

    const showExercises = () => {
        setShowMore(!showMore);
    }

    const onSubmit = () => {
        if (program && user) {
            addProgramToProfile(user.id, program);
            dispatch(addProgramToState(program))
        }
    }
    return (
        <div className={`${styles.program} ${showMore ? styles.program__expanded : ''}`}>
            <div className={styles.programInfo}>
                <p className={styles.programInfo_name}>
                    {program.title}
                </p>
                <p className={styles.programInfo__type}>
                    {program.typeOf}
                </p>
                <button onClick={() => onSubmit()} className={styles.programInfo_add}>
                    <AddCircleIcon className={styles.programInfo_addIcon} color={'primary'} />
                </button>
            </div>
            <div className={styles.program__inner}>
                <DayList days={program.days} />
            </div>
            <button onClick={()=> showExercises()} className={styles.program__expand}>
                <ExpandMoreIcon className={styles.program__expandArrow} fontSize={'small'} />
                <span className={styles.program__showText}>show exercises</span>
                <span className={styles.program__hideText}>hide exercises</span>
                <ExpandMoreIcon className={styles.program__expandArrow} fontSize={'small'} />
            </button>
        </div>
    )
}

export default Complex;