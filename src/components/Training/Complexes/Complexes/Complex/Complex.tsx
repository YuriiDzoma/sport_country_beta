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

    const showExercises = (values: boolean) => {
        setShowMore(values)
    }

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
                    <button onClick={() => onSubmit()} className={styles.programInfo_add}>
                        <AddCircleIcon color={'primary'} />
                    </button>
                </div>
            </div>
            <div>{showMore && (
                <DayList days={program.days} />
            )}
            </div>
            {!showMore
                ? <button onClick={()=> showExercises(true)} className={styles.program__expand}>
                    <ExpandMoreIcon color={'primary'} fontSize={'small'} />
                    <span>show exercises</span>
                    <ExpandMoreIcon color={'primary'} fontSize={'small'} />
                </button>
                : <button onClick={()=> showExercises(false)} className={styles.program__expand}>
                    <ExpandLessIcon color={'primary'} fontSize={'small'} />
                    <span>hide exercises</span>
                    <ExpandLessIcon color={'primary'} fontSize={'small'} />
                </button>
            }
        </div>
    )
}

export default Complex;